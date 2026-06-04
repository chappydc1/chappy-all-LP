import { GetokinawatonicTestimonialCard } from "../GetokinawatonicTestimonialSection/components/GetokinawatonicTestimonialCard";

export const GetokinawatonicTestimonialSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <GetokinawatonicTestimonialCard
        heading="Courtney from Pennsylvania:"
        testimonial={`I was so surprised by how good I felt after a few days. 
                    I don’t feel hungry for carbs anymore, like I used to every single afternoon. I feel full of positive energy when I wake up in the mornings.  
                    Drinking this tonic once a day has some amazing benefits for me. I feel happy with my body for the first time in years. 
                    Just being able to wear my favorite jeans again after so many years feels wonderful. 
                    It’s helped with my marriage enormously and my husband is delighted to get the happy me back again... 
                    But the best part is feeling so confident, getting compliments from others and being able to go to the beach or swim at the pool without feeling self-conscious about how I look.`}
        imageUrl="/images/getokinawatonic/courtney.jpg"
        imageAlt="img"
        name="Courtney"
        ratingClassName=""
      />
      <GetokinawatonicTestimonialCard
        heading="John from New Jersey:"
        testimonial="It got to the point where I knew I had to do something about it fast, you know. My weight was getting out of control and I couldn’t even walk up the stairs without getting out of breath. I was pretty worried about my heart and blood sugar levels and my doctor gave me enough warnings. When I starting taking this new tonic formula in the mornings, I noticed the changes were happening after only 3 days. My junk food cravings just disappeared like that. I felt like I had lots of new energy, you know and the weight started dropping off real fast. The change in my quality of life has been phenomenal. I feel like I did when I was younger. I’d definitely recommend it if you want to make a change in your life for the better."
        imageUrl="/images/getokinawatonic/john.jpg"
        imageAlt="img"
        name="John"
        ratingClassName=""
      />
      <GetokinawatonicTestimonialCard
        heading="Rina from Texas:"
        testimonial="I’m very grateful that I stumbled upon your video. My life has been transformed since I lost 38 lbs. It feels great to look in the mirror these days LOL. I was skeptical about it working at first but thank God I tried. The part that worked best was when you show the easy formula at the end of your video. Thank you so much."
        imageUrl="/images/getokinawatonic/rina.jpg"
        imageAlt="img"
        name="Rina"
        ratingClassName=""
      />
    </div>
  );
};
