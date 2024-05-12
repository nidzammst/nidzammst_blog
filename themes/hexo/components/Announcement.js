const Announcement = ({ post, className }) => {
  if (post?.blockMap) {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        className={className}
      >
        <section
          id="announcement-wrapper"
          className="hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl px-2 py-4 bg-white dark:bg-hexo-black-gray"
        >
          <div id="container-1fc27fc34489f0b73514246aeae498fc"></div>
        </section>
      </div>
    )
  } else {
    return <></>
  }
}
export default Announcement
