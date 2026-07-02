export type CommentFormProps = {
  rootVariantClass: string;
  showInput: boolean;
  label: string;
  placeholder: string;
  inputName: string;
};

export const CommentForm = (props: CommentFormProps) => {
  return (
    <div
      className={`box-border caret-transparent max-w-full outline-[3px] mx-2.5 ${props.rootVariantClass}`}
    >
      {props.showInput ? (
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full border border-neutral-200 border-solid md:text-base md:leading-[28.8px]">
          <input
            type="text"
            placeholder={props.placeholder}
            name={props.inputName}
            className="text-slate-800 text-[15px] box-border caret-transparent block tracking-[normal] leading-[27px] max-w-full outline-[3px] text-start w-full border-neutral-200 p-5 border-solid font-figtree"
          />
        </div>
      ) : (
        props.label
      )}
    </div>
  );
};
