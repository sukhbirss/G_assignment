
export interface ITagCategory {
  name: string;
  isActive?: boolean;
  objectType: "TAG" | "CATEGORY" | "SUBCATEGORY";
  description:string;
}

export const TagObjectTypes = {
  TAG: "TAG",
  CATEGORY: "CATEGORY",
  SUBCATEGORY: "SUBCATEGORY",
};

export interface ITagDocument extends ITagCategory, Document {
}
