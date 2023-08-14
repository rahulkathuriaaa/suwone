function Gallery() {
  return (
    <>
      <section id="gallery" className="relative min450:hidden">
        {/* <img
          src="bg-icon.png"
          alt="bg_img"
          className="absolute top-[30px] right-0"
        /> */}

        <div className="container page-padding py-[4rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center ">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-10">
              SUWONE GALLERY
            </p>
            <img
              src="title-bg.svg"
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]  "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Our Workplace Gallery
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br /> Attracts talents and showcases company's work atmosphere.
            </p>
          </div>

          {/* gallery */}
          <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">

    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/gallery.webp"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/two.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="/three.jpeg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://upcdn.io/FW25bbi/raw/17.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/five.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="/four.jpeg"/>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      </section>
    </>
  );
}

export default Gallery;
