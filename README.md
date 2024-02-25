# RemixJS Portfolio Site

A simple portfolio site created using RemixJS

## Setup

Clone and install dependencies

```sh
git clone https://github.com/tohhongxiang123/remix-portfolio
cd remix-portfolio

npm install
```

To run development server:

```sh
npm run dev
```

## Adding Projects

Projects are stored as `.md` files within `app/projects`. Each project should include in the frontmatter:

-   `title`: Title of the project
-   `cover`: Cover image link of the project
-   `description`: A short, one-line description about the project
-   `detailedDescription`: A short paragraph describing the project
-   `githubLink`: Link to github repository of the project
-   `demoLink` (optional): Link to a demo website showcasing the project
-   `screenshots`: An array of links to images for the project
-   `date`: The date of the project (used to sort)

## Deployment

Update the domain within `sessions.server.ts`, and then push to github. Vercel will automatically handle deployment.

-   The domain doesn't include `https://` (e.g. `portfolio.vercel.app`)

## Resources

-   https://blacksheepcode.com/posts/adding_msw_bundler_to_remix_app
-   https://www.sarasoueidan.com/blog/nested-links/
