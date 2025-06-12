export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  status?: 'draft' | 'published' | 'archived';
  visibility?: 'public' | 'private' | 'unlisted';
}
