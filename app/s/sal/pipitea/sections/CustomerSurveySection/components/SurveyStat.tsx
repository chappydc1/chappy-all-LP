export type SurveyStatProps = {
  firstPercentage: string;
  firstDescription: string;
  secondPercentage: string;
  secondDescription: string;
};

export const SurveyStat = (props: SurveyStatProps) => {
  return (
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
                   
                    className="text-zinc-700 text-[35px] box-border caret-transparent leading-[42px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full"
                  >
                    <div
                     
                      className="box-border caret-transparent outline-[3px] w-full"
                    >
                      <p
                       
                        className="box-border caret-transparent outline-[3px]"
                      >
                        <strong
                         
                          className="text-pink-950 font-bold box-border caret-transparent outline-[3px]"
                        >
                          {props.firstPercentage}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                 
                  className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                >
                  <div
                   
                    className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-[15px] md:text-lg md:leading-[27px]"
                  >
                    <div
                     
                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                    >
                      <p
                       
                        className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                      >
                        {props.firstDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
       
        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-h-[auto] min-w-10 outline-[3px] w-10"
      ></div>
      <div
       
        className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
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
                   
                    className="text-zinc-700 text-[35px] box-border caret-transparent leading-[42px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full"
                  >
                    <div
                     
                      className="box-border caret-transparent outline-[3px] w-full"
                    >
                      <p
                       
                        className="box-border caret-transparent outline-[3px]"
                      >
                        <strong
                         
                          className="text-pink-950 font-bold box-border caret-transparent outline-[3px]"
                        >
                          {props.secondPercentage}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                 
                  className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                >
                  <div
                   
                    className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-[15px] md:text-lg md:leading-[27px]"
                  >
                    <div
                     
                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                    >
                      <p
                       
                        className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                      >
                        {props.secondDescription}
                      </p>
                    </div>
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
