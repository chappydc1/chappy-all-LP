export const DiabetesDoctorBioSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] my-6 md:my-12">
      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] w-full mx-auto px-3">
        <div className="bg-yellow-600 box-border caret-transparent outline-[3px] p-4 rounded-2xl border-[5px] border-double border-white/60 md:p-6">
          <div className="text-white items-center box-border caret-transparent flex flex-wrap justify-center outline-[3px] mx-auto">
            <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] w-full px-3 md:w-[33.3333%]">
              <h2 className="text-[24.575px] font-bold box-border caret-transparent block leading-[29.49px] outline-[3px] mb-4 md:text-[32px] md:hidden md:leading-[38.4px]">
                Who Is Dr. William Li?
              </h2>
              <img
                src="/img/doctor.jpg?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
                alt="Doctor"
                className="box-border caret-transparent inline max-w-fit outline-[3px] w-full"
              />
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] text-left w-full px-3 md:w-[66.6667%]">
              <h2 className="text-[24.575px] font-bold box-border caret-transparent hidden leading-[29.49px] outline-[3px] mb-4 md:text-[32px] md:block md:leading-[38.4px]">
                Who Is Dr. William Li?
              </h2>
              <p className="box-border caret-transparent outline-[3px] mb-4">
                Dr. Li is a Harvard-trained internal medicine physician,
                metabolic researcher, President of the Angiogenesis Foundation,
                and{" "}
                <b className="font-bold box-border caret-transparent outline-[3px]">
                  #1 New York Times bestselling author
                </b>
                of Eat to Beat Disease. With over 30 years of medical research,
                more than 40 medical innovations developed under his leadership,
                and millions of followers worldwide, he is internationally
                recognized for his groundbreaking work in metabolic health and
                disease reversal.
              </p>
              <p className="box-border caret-transparent outline-[3px] mb-4">
                During his research at Harvard Medical School, Dr. Li uncovered
                the hidden root cause of type 2 diabetes — a toxic buildup he
                calls
                <b className="font-bold box-border caret-transparent outline-[3px]">
                  pancreatic sludge
                </b>
                , formed by environmental chemicals that suffocate
                insulin-producing cells and disrupt natural{" "}
                <b className="font-bold box-border caret-transparent outline-[3px]">
                  GLP-1
                </b>
                production. His discovery led to the development of{" "}
                <b className="font-bold box-border caret-transparent outline-[3px]">
                  Glycocept
                </b>
                , a scientifically formulated blend designed to dissolve
                pancreatic sludge, restore the body’s natural GLP-1 levels, and
                reactivate healthy blood sugar regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
