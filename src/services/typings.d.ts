declare namespace API {
  type BaseEntity = {
    id: string;
  };

  type Catalog = BaseEntity & {
    name: string;
    normalizedName: string;
    setting: CatalogSetting;
    type: number;
  };

  type CatalogSetting = {
    title: string;
    container: boolean;
  };

  type WorkItem = BaseEntity & {
    name: string;
    normalizedName: string;
    sortOrder: number;
    catalogId: string;
  };

  type Image = BaseEntity & {
    alt: string;
    height?: number;
    src: string;
    width?: number;
    url: string;
    className: string;
    fileContent?: FileContent;
  };

  type Navbar = {
    id: string | undefined;
    navItems: NavItem[];
  };

  type NavItem = {
    name: string;
    url: string;
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
}
