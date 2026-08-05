export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: 'spaced-repetition-vs-re-reading',
    title: 'Why Spaced Repetition Beats Re-Reading Your Notes',
    excerpt:
      'The science behind why reviewing a flashcard right before you forget it works better than rereading a chapter five times.',
    date: 'Aug 2026',
    readTime: '4 min read',
    body: [
      "Re-reading a chapter feels productive. You recognize the sentences, the diagrams look familiar, and it's easy to mistake that familiarity for actual knowledge. The problem is that recognition and recall are different skills — recognizing a fact when you see it again isn't the same as being able to produce it from memory during an exam, under time pressure, with no notes in front of you.",
      "This gap has a name: the forgetting curve, first described by psychologist Hermann Ebbinghaus in the 1880s. Without review, memory of new information drops sharply within the first day, then continues to decay — but each time you review a piece of information right as you're about to forget it, the curve flattens. The interval before the next necessary review gets longer. Review it enough times at the right intervals, and it moves from short-term recall into something closer to permanent.",
      "Spaced repetition systems are built directly on this idea. Instead of reviewing everything on a fixed schedule (every day, or once a week, regardless of how well you know it), the system tracks how well you know each individual fact and adjusts. A flashcard you nail every time gets pushed further out — a week, then two weeks, then a month. A flashcard you keep getting wrong comes back the next day. You spend your limited study time on what you're about to forget, not on what you already know cold.",
      'A 2006 meta-analysis by Cepeda, Pashler, Vul, Wixted, and Rohrer, reviewing over 180 studies on the spacing effect, found this consistently outperforms massed practice (cramming, or re-reading in one sitting) for long-term retention — often by a significant margin, and the advantage grows the longer the retention interval you care about. For a board exam six months away, that gap matters far more than for a quiz next week.',
      "The practical takeaway isn't complicated: convert what you're memorizing — formulas, definitions, reaction mechanisms, dates — into individual flashcards rather than paragraphs to re-read, and review them on a schedule that adapts to how well you actually know each one. It's less comfortable than re-reading, because you're forced to test yourself and sometimes fail. That discomfort is the mechanism. Retrieval practice — the act of pulling a fact out of memory rather than recognizing it on a page — is itself what strengthens the memory trace, independent of the spacing.",
    ],
  },
  {
    slug: 'revision-timetable-that-survives-week-two',
    title: 'Building a Revision Timetable That Survives Week Two',
    excerpt:
      "Most study schedules fall apart within days. Here's how to build one that accounts for the days you don't stick to it.",
    date: 'Jul 2026',
    readTime: '5 min read',
    body: [
      "The typical revision timetable fails for a predictable reason: it's built assuming a version of you that never gets tired, never has a bad day, and never underestimates how long a topic will actually take. Real study weeks aren't like that. A timetable that can only survive a perfect week isn't a plan — it's a wish.",
      'The fix is to build in slack deliberately, rather than discovering you need it after the schedule has already collapsed. A revision plan with zero buffer time is a plan that breaks the first time something goes wrong — and something always goes wrong. Set aside one day a week, or a couple of hours daily, explicitly for catching up. If you never need it, use it for extra practice on your weakest area. If you do need it, the rest of the schedule survives intact instead of cascading into a pileup of missed topics.',
      "Second, most schedules are built around subjects instead of specific weak topics, which hides the real problem. \"Study Physics, 6-8pm\" doesn't tell you whether you're revising something you've already mastered or something you keep getting wrong. A more useful unit is the individual topic, ranked by how shaky it actually is — not by how far away it is in the syllabus. Time spent re-reading something you already know well is time not spent on the thing that's actually going to cost you marks.",
      'Third, be honest about estimation. Most people underestimate how long a topic takes to actually revise properly — not skim, but revise to the point of being able to solve a mixed problem set without hints. If a plan has you covering four chapters in one evening, that number was picked to make the schedule look complete on paper, not because it reflects how learning actually works. A schedule with fewer, more realistic blocks that you actually follow beats an ambitious one you abandon by Thursday.',
      "Finally, plan for the week you don't stick to it — because at some point, you won't. One missed day doesn't require rebuilding the whole schedule from scratch; it requires a plan that already expected a missed day and has a buffer built in to reabsorb it. The goal isn't a perfect timetable. It's one that keeps functioning after an imperfect week, because every real revision period has more than one of those.",
    ],
  },
  {
    slug: 'jee-main-vs-jee-advanced',
    title: 'What Actually Changes Between JEE Main and JEE Advanced',
    excerpt:
      'A practical breakdown of how the question style, time pressure, and negative marking differ — and how to prep for both.',
    date: 'Jul 2026',
    readTime: '6 min read',
    body: [
      "JEE Main and JEE Advanced test the same three subjects — Physics, Chemistry, and Mathematics — but they're built to measure different things, and preparing for one without adjusting for the other is a common mistake. Main is a large-scale screening exam; qualifying places you among a group of candidates eligible to sit Advanced, which is the exam that actually determines admission to the IITs.",
      "The question style is the clearest difference. Main leans heavily on direct, formula-application questions — recognizable patterns you can often solve quickly if you've drilled the standard problem types. Advanced is deliberately less templated. It favors multi-concept questions that combine two or three ideas from different chapters into a single problem, questions with unconventional phrasing designed to test whether you actually understand a concept rather than recognize a memorized pattern, and question formats that go beyond single-correct MCQs — including multiple-correct-answer questions, numerical-answer-type questions with no options to eliminate against, and matrix-match or paragraph-based question sets.",
      "Negative marking compounds this difference. Main's negative marking is straightforward — a fixed penalty for a wrong answer on a standard MCQ. Advanced's scoring varies by question type within the same paper: some question types have partial marking (credit for getting some but not all correct options in a multi-correct question), some carry heavier negative marking specifically to discourage guessing on high-ambiguity formats, and the exact scheme is announced separately for each session rather than being one fixed rule across the whole exam. Guessing strategies that are safe on Main can be actively costly on Advanced if applied without adjustment.",
      "Time pressure also behaves differently. Main's questions are individually quicker to solve, so the pressure comes from volume — moving fast enough through a large number of relatively standard questions. Advanced's questions take longer to parse and solve individually, so the pressure comes from depth — a single multi-step problem can eat several minutes even for a well-prepared student, which means time management on Advanced is more about triage (deciding what to attempt at all) than about speed on any single question.",
      "For preparation, the implication is that pure speed-drilling on standard problem types — which is genuinely the right strategy for Main — needs to be supplemented, not replaced, with slower, deeper practice on multi-concept and non-standard problems for Advanced. Students who only ever practice in the Main style tend to freeze on Advanced-style questions not because they lack knowledge, but because they've never practiced applying that knowledge in an unfamiliar combination. Practicing previous years' Advanced papers specifically — not just more Main-style mocks — is what closes that gap.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
