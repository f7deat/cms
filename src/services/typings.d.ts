declare namespace API {
  type Catalog = {
    id: string;
    name: string;
    normalizedName: string;
    setting: CatalogSetting;
  };

  type CatalogSetting = {
    title: string;
  };

  type WorkItem = {
    id: string;
    name: string;
    normalizedName: string;
    sortOrder: number;
  };

  type Image = {
    id: string;
    alt: string;
    height?: number;
    src: string;
    width?: number;
    url: string;
    className: string;
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
    workContent: number;
    workItem: number;
    component: number;
    fileContent: number;
    fileItem: number;
  };

  type FileListItem = {
    id: string;
    name: string;
    size: number;
    type: string;
    url: string;
  };

  type FileItem = {
    fileId: string;
    itemId: string;
  };
}
