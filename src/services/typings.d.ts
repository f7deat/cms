declare namespace API {
  type Catalog = {
    id: string;
    name: string;
    normalizedName: string;
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
    navItems: NavItem[];
  };

  type NavItem = {
    name: string;
    url: string;
  };
}
