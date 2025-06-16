import { handleCreatePostSubmit } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CreateBlogPage = () => {
  return (
    <Card className="max-w-lg mx-auto mt-4 py-8 px-4">
      <CardHeader>
        <CardTitle className="text-2xl">Create Post</CardTitle>
        <CardDescription>
          Create a new post to share with the world
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" action={handleCreatePostSubmit}>
          <div className="flex flex-col gap-2 ">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Title"
              required
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              name="content"
              id="content"
              required
              placeholder="Content"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              name="imageUrl"
              id="imageUrl"
              required
              placeholder="Image URL"
              type="url"
            />
          </div>

          <Button type="submit" className="my-8">
            Create Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBlogPage;
