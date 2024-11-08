import { Helmet } from 'react-helmet';

function SeoTags() {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Rocketo-do | Launch your tasks</title>
        <meta name="description" content="Rocketo-Do is a task manager app built with React" />
        <meta name="author" content="Kishore S R" />
        <meta name="keywords" content="task manager, to-do list, React, Kishore S R, productivity" />
        <meta property="og:title" content="Rocketo-Do | Task Manager" />
        <meta property="og:description" content="Rocketo-Do is a task manager app built with React." />
        <meta property="og:url" content="https://rocketodo.pages.dev" />
      </Helmet>
    </div>
  );
}

export default SeoTags;