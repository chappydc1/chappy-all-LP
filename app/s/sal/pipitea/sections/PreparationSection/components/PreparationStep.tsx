export type PreparationStepProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const PreparationStep = (props: PreparationStepProps) => {
  return (
    <div
     
      className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
    >
      <div
       
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
         
          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <div
           
            className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
          >
            <div
             
              className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
            >
              <div
               
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                 
                  className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mb-5"
                >
                  <img
                    src={props.imageUrl}
                    alt=""
                   
                    title=""
                    className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-md"
                  />
                </div>
              </div>
              <div
               
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                 
                  className="text-black text-[20.4583px] box-border caret-transparent leading-[24.55px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-[23px] md:leading-[27.6px]"
                >
                  <div
                   
                    className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] w-full md:text-[23px] md:leading-[27.6px]"
                  >
                    <p
                     
                      className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                    >
                      <strong
                       
                        className="text-[20.4583px] font-bold box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                      >
                        {props.title}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div
               
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                 
                  className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]"
                >
                  <div
                   
                    className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                  >
                    <p
                     
                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                    >
                      {props.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
