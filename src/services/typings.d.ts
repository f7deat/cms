declare namespace API {
  type BaseEntity = {
    id: string;
  };

  type AbtractComponent = BaseEntity & {
    className: string;
  };

  type Catalog = BaseEntity & {
    name: string;
    description?: string;
    normalizedName: string;
    type: number;
    viewCount: number;
    thumbnail?: string;
    createdDate: Date;
    modifiedDate?: Date;
    active: boolean;
  };

  type CatalogSetting = {
    title: string;
    container: boolean;
  };

  type Column = AbtractComponent & {
    rowId: string | undefined;
  };

  type Component = BaseEntity & {
    name: string;
    normalizedName: string;
    active: boolean;
  };

  type Image = BaseEntity & {
    alt: string;
    description: string;
    height?: number;
    width?: number;
    url: string;
    className: string;
    wrapper: string;
    file?: FileContent;
  };

  type Navbar = {
    id: string | undefined;
    navItems: NavItem[];
    layout: 0 | 1;
  };

  type NavItem = BaseEntity & {
    name: string;
    links?: Link[];
  };

  type Statistic = {
    catalog: number;
    workContent: number;
    workItem: number;
    component: number;
    fileContent: number;
    fileItem: number;
  };

  type FileListItem = BaseEntity & {
    name: string;
    size: number;
    type: string;
    url: string;
  };

  type FileContent = BaseEntity & {
    name: string;
    size: number;
    type: string;
    url: string;
  };

  type FileItem = {
    fileId: string;
    itemId: string;
  };

  type AppSetting = BaseEntity & {
    name: string;
    description: string;
    normalizedName: string;
  };

  type ContactForm = BaseEntity & {
    name: string;
    resultUrl: string;
    labels?: ContactFormLabel;
  };

  type ContactFormLabel = {
    name: string;
    email: string;
    phoneNumber: string;
  };

  type WorkContent = BaseEntity & {
    name: string;
    parentId: string | undefined;
    componentId: string;
    arguments: string;
    active: boolean;
  };

  type Contact = BaseEntity & {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
  };

  type User = BaseEntity & {
    userName: string;
    email: string;
    phoneNumber: string;
    avatar: string;
    roles: string[];
  };

  type UpgradeListItem = {
    name: string;
    url: string;
  };

  type Facebook = {
    appId: string;
    appSecret: string;
    pageId: string;
    pageAccessToken: string;
  };

  type Link = BaseEntity & {
    name: string;
    href: string;
    target: string;
  };

  type ListGroup = {
    name: string;
  };

  type ListGroupItem = BaseEntity & {
    link: Link;
    icon: string;
    badge: number;
    suffix: string;
  };

  type Telegam = {
    token: string;
    chatId: string;
  };

  type WorkItem = BaseEntity & {
    normalizedName: string;
    sortOrder: number;
    catalogId?: string;
    active: boolean;
  };
}

declare namespace Entity {
  type WorkItem = {
    workId?: string;
    sortOrder?: number;
    catalogId?: string;
  };
}

declare namespace CPN {
  type Jumbotron = {
    backgroundImage: string;
  };
}
