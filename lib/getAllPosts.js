

export default async function getAllPosts(){
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      // cache: "force-cache"
      // cache: "no-store",
      next: {
        revalidate: 10,
      }
    }
  );

  if (!result.ok) {
    throw new Error("There was an error featching posts");
  }

  return result.json();
}