export interface Post {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  imageUrl: string;
  titleImageUrl: string;
  content: string; // markdown
  likes: number;
  category: PostCategory;
  subcategory: PostSubcategory;
  comments: Comment[];
}

export interface Comment {
  id: number;
  date: Date;
  author: string;
  content: string;
  likes: number;
  liked: boolean;
  disabled: boolean;
  replies: Comment[];
}

export enum PostCategory {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
}

export enum PostSubcategory {
  RIDE = 'RIDE',
  SNOW = 'SNOW',
  SURF = 'SURF',
  PARK = 'PARK',
}
