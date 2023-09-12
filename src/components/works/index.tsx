import {
  activeWork,
  addItem,
  addWorkContent,
  deleteWorkContent,
  listWork,
  listWorkContent,
} from '@/services/work-content';
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  MoreOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Dropdown, MenuProps, message, Popconfirm, Space, Table } from 'antd';
import { FormattedMessage, history } from '@umijs/max';
import { useParams } from '@umijs/max';
import { useEffect, useRef, useState } from 'react';
import AddComponent from '../add-component';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { ColumnsType } from 'antd/lib/table';

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === 'sort') {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: 'none', cursor: 'move' }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const WorkContentComponent: React.FC = () => {
  const { id } = useParams();
  const [dataSource, setDataSource] = useState<API.WorkItem[]>([]);

  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<any>();

  useEffect(() => {
    if (id) {
      listWorkContent(id).then(response => {
        setDataSource(response.data)
      })
    }
  }, [id]);

  const onConfirm = async (workContentId: string) => {
    const response = await deleteWorkContent(workContentId, id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const onFinish = async (value: any) => {
    value.catalogId = id;
    const response = await addWorkContent(value);
    if (response.succeeded) {
      message.success('Added!');
      setVisible(false);
      actionRef.current?.reload();
    }
  };

  const onSelect = async () => {
    const response = await listWork();
    setOptions(response);
    setOpen(true);
  };

  const addWorkItem = async (values: API.WorkItem) => {
    const response = await addItem(values);
    if (response.succeeded) {
      message.success('Saved');
      setOpen(false);
      actionRef.current?.reload();
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Show / Hide'
    },
  ];

  const onMoreClick = async (event: any, id: string) => {
    if (event.key === '1') {
      const resposne = await activeWork(id);
      if (resposne.succeeded) {
        message.success('Actived!');
        actionRef.current?.reload();
      }
    }
  }

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((previous: API.WorkItem[]) => {
        const activeIndex = previous.findIndex((i) => i.id === active.id);
        const overIndex = previous.findIndex((i) => i.id === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  const columns: ColumnsType<any> = [
    {
      key: 'sort',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      render: (dom, record) => (
        <Space>
          <Button
            key={1}
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              history.push(
                `/works/${record.normalizedName.toLocaleLowerCase()}/${record.id
                }`,
              );
            }}
          />
          <Popconfirm
            title="Are you sure?"
            key={4}
            onConfirm={() => onConfirm(record.id)}
          >
            <Button
              icon={<DeleteOutlined />}
              danger
              type="primary"
            ></Button>
          </Popconfirm>
          <Dropdown menu={{ items, onClick: (event) => onMoreClick(event, record.id) }} key="more">
            <Button icon={<MoreOutlined />} type='dashed' />
          </Dropdown>
        </Space>
      )
    }
  ];

  return (
    <>
      <div className='mb-2 flex justify-end gap-2'>
        <Button
          key={0}
          onClick={() => setVisible(true)}
          type="primary"
          icon={<PlusOutlined />}
        >
          <FormattedMessage id="general.new" />
        </Button>
        <Button key={1} onClick={onSelect} icon={<PlusOutlined />}>
          Chọn
        </Button>
      </div>
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
        <SortableContext
          items={dataSource.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          <Table<API.WorkItem>
            components={{
              body: {
                row: Row,
              },
            }}
            columns={columns}
            rowKey="id"
            dataSource={dataSource}
          />
        </SortableContext>
      </DndContext>
      <AddComponent
        open={visible}
        onOpenChange={setVisible}
        onFinish={onFinish}
      />
      <ModalForm open={open} onOpenChange={setOpen} onFinish={addWorkItem}>
        <ProFormText name="catalogId" initialValue={id} hidden />
        <ProFormSelect
          showSearch
          name="workContentId"
          options={options}
          label="Work"
        />
      </ModalForm>
    </>
  );
};

export default WorkContentComponent;
