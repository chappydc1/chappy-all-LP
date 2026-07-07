"use client";

import { useAdvertorial } from "../../LandingPage/context";

type Comment = {
  id: string;
  author: string;
  text: string;
  likes: string;
  time: string;
  level: "top" | "reply";
  avatarKey: string;
};

function CommentItem({
  comment,
  avatarSrc,
  likeIcon,
  isReply = false,
}: {
  comment: Comment;
  avatarSrc: string;
  likeIcon: string;
  isReply?: boolean;
}) {
  const avatarSize = isReply ? "35px" : "50px";
  const avatarClass = isReply
    ? "aspect-[auto_35_/_35] box-border caret-transparent h-[35px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] align-baseline w-[35px]"
    : "relative items-center aspect-[auto_50_/_50] box-border caret-transparent flex h-[50px] justify-center max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] align-baseline w-[50px] overflow-hidden";

  return (
    <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] ml-2.5 mt-2.5">
      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow ${isReply ? "max-w-[50px] min-w-[50px] w-[50px]" : "max-w-[65px] min-w-[65px] w-[65px]"} min-h-[auto] outline-[3px]`}
      >
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mr-[5px] mb-[5px]">
            <img
              src={avatarSrc}
              alt=""
              sizes={avatarSize}
              className={avatarClass}
            />
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="text-indigo-800 text-[15.4583px] box-border caret-transparent leading-[17.0042px] min-h-[auto] min-w-[auto] outline-[3px] w-full pb-[5px] px-[5px] font-roboto md:text-base md:leading-[17.6px]">
            <p className="text-[15.4583px] box-border caret-transparent leading-[17.0042px] outline-[3px] md:text-base md:leading-[17.6px]">
              <strong className="text-[15.4583px] font-bold box-border caret-transparent leading-[17.0042px] outline-[3px] md:text-base md:leading-[17.6px]">
                {comment.author}
              </strong>
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="text-black text-[15.4583px] box-border caret-transparent leading-[20.0958px] min-h-[auto] min-w-[auto] outline-[3px] w-full p-[5px] font-roboto md:text-base md:leading-[20.8px]">
            <p className="text-[15.4583px] box-border caret-transparent leading-[20.0958px] outline-[3px] md:text-base md:leading-[20.8px]">
              {comment.text}
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] p-[5px]">
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] min-w-[11%] outline-[3px] w-[11%]">
                <div className="text-indigo-800 text-[13.4583px] box-border caret-transparent leading-[16.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full font-roboto md:text-sm md:leading-[16.8px]">
                  <p className="text-[13.4583px] box-border caret-transparent leading-[16.15px] outline-[3px] md:text-sm md:leading-[16.8px]">
                    Like{" "}
                    <span className="text-black">•{" "}</span>
                    Reply{" "}
                    <span className="text-black">•</span>
                  </p>
                </div>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] min-w-[3%] outline-[3px] w-[3%]">
                <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <img
                    src={likeIcon}
                    alt=""
                    sizes="783px"
                    className="aspect-[auto_27_/_16] box-border caret-transparent h-4 max-w-full min-h-[auto] min-w-[auto] object-contain outline-[3px] align-baseline w-[27px]"
                  />
                </div>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] min-w-[3%] outline-[3px] w-[3%]">
                <div className="text-zinc-500 text-[13.4583px] box-border caret-transparent leading-[16.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full font-roboto md:text-sm md:leading-[16.8px]">
                  <p className="text-[13.4583px] box-border caret-transparent leading-[16.15px] outline-[3px] md:text-sm md:leading-[16.8px]">
                    {comment.likes}{" "}
                    <span className="text-black">•</span>
                  </p>
                </div>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                <div className="text-zinc-500 text-[13.4583px] box-border caret-transparent leading-[16.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full font-roboto md:text-[13px] md:leading-[15.6px]">
                  <p className="text-[13.4583px] box-border caret-transparent leading-[16.15px] outline-[3px] md:text-[13px] md:leading-[15.6px]">
                    {comment.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const RosabellaCommentsSection = () => {
  const { copy, media } = useAdvertorial();

  // Group comments: top-level with their replies
  const topComments = copy.comments.filter((c) => c.level === "top");
  const replies = copy.comments.filter((c) => c.level === "reply");

  // Build a map of top comment id prefix → replies
  // Replies have ids like "c1r1", "c3r1", etc — they follow top comment ids
  const replyMap: Record<string, Comment[]> = {};
  replies.forEach((r) => {
    // Extract parent id by removing trailing "r\d+"
    const parentId = r.id.replace(/r\d+$/, "");
    if (!replyMap[parentId]) replyMap[parentId] = [];
    replyMap[parentId].push(r as Comment);
  });

  return (
    <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[30px] mx-2.5 py-[5px]">
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
            <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
              <div className="text-[15.4583px] box-border caret-transparent leading-[17.0042px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full pl-[5px] pr-2.5 md:text-xl md:leading-[22px]">
                <p className="text-[15.4583px] box-border caret-transparent leading-[17.0042px] outline-[3px] text-left md:text-xl md:leading-[22px]">
                  <strong className="text-neutral-800 text-[15.4583px] font-bold box-border caret-transparent leading-[17.0042px] outline-[3px] md:text-xl md:leading-[22px]">
                    Comments
                  </strong>
                </p>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
              <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 mb-5 p-[5px]">
                <textarea
                  placeholder="Add a comment ..."
                  className="text-gray-800 box-border caret-transparent block tracking-[0.28px] min-h-[100px] outline-[3px] resize-y w-full border-neutral-300 px-[15px] py-[11px] rounded-md font-roboto"
                ></textarea>
              </div>
            </div>

            {topComments.map((comment) => {
              const commentReplies = replyMap[comment.id] || [];
              const avatarSrc =
                media.commentAvatars[comment.avatarKey] ||
                media.defaultProductImage;

              return (
                <div
                  key={comment.id}
                  className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                >
                  <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-2.5">
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <CommentItem
                              comment={comment as Comment}
                              avatarSrc={avatarSrc}
                              likeIcon={media.likeIcon}
                              isReply={false}
                            />
                          </div>
                        </div>

                        {commentReplies.map((reply) => {
                          const replyAvatarSrc =
                            media.commentAvatars[reply.avatarKey] ||
                            media.defaultProductImage;
                          return (
                            <div
                              key={reply.id}
                              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                            >
                              <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[5px]">
                                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] outline-[3px] w-[10%]"></div>
                                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                        <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] border-stone-300 mt-2.5 mb-5 border-l">
                                          <CommentItem
                                            comment={reply as Comment}
                                            avatarSrc={replyAvatarSrc}
                                            likeIcon={media.likeIcon}
                                            isReply={true}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
