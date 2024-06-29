import "../AppStyle.css";
import blog1 from "../assets/blog-imege-1.png";

import AvatarAndNameAndDurtion from '../compnents/AvatarAndNameAndDurtion';
import TitleAndDiscComp from '../compnents/TitleAndDiscComp';

function BlogComp({writerName, writerAvatarPath, whenDidWrite, titleBlog, discBlog, imagePathBlog}) {

  return (
    <div className="Bolg">
      <div className="grgrClass" >
        <AvatarAndNameAndDurtion
          avatarPath={writerAvatarPath}
          name= {writerName}
          durtion={whenDidWrite}
        />
       <TitleAndDiscComp title={titleBlog}
       disc={discBlog}
       />
      </div>
      <div className="imageClass" style={{margin:0}}>

        <img src={blog1} alt="blog"></img>

      </div>
    </div>
  );
}



export default BlogComp;
