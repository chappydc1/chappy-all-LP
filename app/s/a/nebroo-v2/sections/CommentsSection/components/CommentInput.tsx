"use client";

export const CommentInput = () => {
  return (
    <div className="bg-white box-border caret-transparent outline-[3px] mx-2.5">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]"></div>
      </div>
      <div className="items-stretch box-border caret-transparent flex flex-col outline-[3px] w-full mx-auto pl-0 pr-2.5 py-2.5 md:pl-px">
        <input
          type="text"
          placeholder="Add a comment ..."
          name=""
          className="text-black items-center box-border caret-auto block min-h-[auto] min-w-[auto] outline-[3px] text-start w-full border-neutral-200 p-5 border-solid font-montserrat"
        />
      </div>
    </div>
  );
};
