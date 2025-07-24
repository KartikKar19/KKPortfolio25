// src/components/CurvedLoopsSection.tsx
import React from 'react';
import CurvedLoop from './CurvedLoop';

const CurvedLoopsSection = () => {
  return (
<section className="min-h-screen flex flex-col items-center py-16 space-y-16 md:space-y-24">
      <CurvedLoop
        marqueeText="Please ✦ Give ✦ Me ✦ Job ✦ Please ✦ Give ✦ Me ✦ Job ✦ Please ✦ Give ✦ Me ✦ Job ✦"
        speed={1}
        curveAmount={400}
        direction="left"
        interactive={true}
        className="text-white text-4xl"
      />
      <CurvedLoop
        marqueeText="Or ✦ Else ✦ You ✦ Will ✦ Lose ✦ A ✦ Great ✦ Coder ✦ Or ✦ Else ✦ You ✦ Will ✦ Lose ✦ A ✦ Great ✦ Coder ✦ Or ✦ Else ✦ You ✦ Will ✦ Lose ✦ A ✦ Great ✦ Coder "
        speed={2}
        curveAmount={400}
        direction="right"
        interactive={true}
        className="text-blue-400 text-4xl"
      />
      <CurvedLoop
        marqueeText="Your ✦ Life ✦ Would ✦ Become ✦ Easier ✦ With ✦ Me ✦ Your ✦ Life ✦ Would ✦ Become ✦ Easier ✦ With ✦ Me ✦ Your ✦ Life ✦ Would ✦ Become ✦ Easier ✦ With ✦ Me"
        speed={3}
        curveAmount={400}
        direction="left"
        interactive={false}
        className="text-pink-400 text-4xl"
      />
    </section>
  );
};

export default CurvedLoopsSection;
``
