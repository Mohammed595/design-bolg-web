import "./AppStyle.css";
import prfile1 from "./assets/profile-1.png";
import BlogComp from "./compnents/bolgComp";

function App() {
  const blogs = [
    {
      writerName: "Amit Das",
      writerAvatarPath: prfile1,
      whenDidWrite: "4 days ago",
      titleBlog: "Your portfolio is stopping you from getting that job",
      discBlog:
        "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    },
    {
      writerName: "Mohammed",
      writerAvatarPath: prfile1,
      whenDidWrite: "6 days ago",
      titleBlog: "Your portfolio is stopping you from getting that job",
      discBlog:
        "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    },
    {
      writerName: "Mohammed",
      writerAvatarPath: prfile1,
      whenDidWrite: "6 days ago",
      titleBlog: "Your portfolio is stopping you from getting that job",
      discBlog:
        "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    },
    {
      writerName: "444",
      writerAvatarPath: prfile1,
      whenDidWrite: "6 days ago",
      titleBlog: "Your portfolio is stopping you from getting that job",
      discBlog:
        "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    },
    {
      writerName: "5555",
      writerAvatarPath: prfile1,
      whenDidWrite: "6 days ago",
      titleBlog: "Your portfolio is stopping you from getting that job",
      discBlog:
        "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    },
  ];

  return (
    <div className="AllScreen">
      <div className="BlogsSction">
        {/* {
         <div className="FixedBlogs">
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogComp key={index} {...blog} />
          ))}
        </div> } */}

        <div className="ScrollableBlogs">
        {blogs.map((blog, index) => (
              <BlogComp key={index} {...blog} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
