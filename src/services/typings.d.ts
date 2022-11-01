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
}
