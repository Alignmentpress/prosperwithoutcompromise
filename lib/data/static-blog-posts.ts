import type { BlogPostRow } from "@/lib/types/blog";
import {
  AMAZON_BOOK_CTA_HREF,
  bold,
  bulletList,
  doc,
  h2,
  h3,
  linkedText,
  listItem,
  orderedList,
  paragraph,
  text,
} from "./tiptap-build";

/** Curated posts shipped with the app. Supabase wins if the same `slug` exists in the database. */
export const STATIC_BLOG_POSTS: BlogPostRow[] = [postFulfillmentPractice(), postQuietFear(), postCarrySetDown()];

function ctaBlock(intro: string, emphasis: string): object[] {
  return [
    h2(text("Get the book")),
    paragraph(
      text(intro),
      text(" "),
      bold(emphasis),
      text(" "),
      linkedText("Get the book on Amazon", AMAZON_BOOK_CTA_HREF),
      text("."),
    ),
  ];
}

function postFulfillmentPractice(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Peak moments create memories. "),
      bold("Quiet fidelity to your values"),
      text(
        " creates a life that still feels like yours on an ordinary Tuesday.",
      ),
    ),
    h2(text("The stakes")),
    paragraph(
      text(
        "Fulfillment is easy to confuse with intensity. We chase spikes: promotions, launches, praise, travel, the relief after a crisis. Those moments matter—but they are not the architecture of a well-lived life. The deeper question is whether your ",
      ),
      bold("week"),
      text(" resembles your "),
      bold("priorities"),
      text(", not whether your highlight reel does."),
    ),
    paragraph(
      text(
      "Most adults are not failing because they lack ambition. They are tired because their days reward ",
      ),
      bold("performance"),
      text(" more consistently than they reward "),
      bold("alignment"),
      text(
        ". The result is a familiar tension: outward motion, inner noise.",
      ),
    ),
    h2(text("Reframe: what “full” actually means")),
    paragraph(
      text("A fulfilled life is less like a mood and more like "),
      bold("reliability"),
      text(
        "—between you and your own word. You become dependable to the person you intend to be when nobody is applauding.",
      ),
    ),
    paragraph(
      text(
        "That reliability is built through practice, not inspiration. When fulfillment is treated as a feeling, you outsource stability to circumstances. Emotional volatility is expensive: it erodes focus, relationships, and the courage required for long-term decisions.",
      ),
    ),
    h2(text("Three practices that make fulfillment sustainable")),
    h3(text("1) Name your non-negotiables—then protect them like strategy")),
    paragraph(
      text(
        "Not hobbies. Non-negotiables are the small boundaries that keep you human: sleep, movement, a weekly review, uninterrupted time with people you love, a refusal to say yes when you mean “not without cost.” If your calendar can’t reflect them, your life will eventually contradict them—and you’ll feel it as restlessness.",
      ),
    ),
    h3(text("2) Trade “more output” for “cleaner intention”")),
    paragraph(
      text(
        "High performers often confuse speed with clarity. Ask a simple question: What am I optimizing for this quarter—approval, control, or alignment? You can win the wrong game with excellence.",
      ),
    ),
    h3(text("3) Finish one meaningful action weekly")),
    paragraph(
      text(
        "Big transformations are overrated as motivators. Repeated integrity is underrated. One meaningful action—an honest conversation, a boundary held, a generous decision—signals that you are not living on autopilot.",
      ),
    ),
    h2(text("Key takeaways")),
    bulletList(
      listItem(
        paragraph(text("Fulfillment is behavioral continuity, not emotional highs.")),
      ),
      listItem(
        paragraph(text("Sustainable growth depends on calendar fidelity to your values.")),
      ),
      listItem(paragraph(text("Practice beats inspiration when ordinary days dominate."))),
    ),
    h2(text("Bottom line")),
    paragraph(
      text(
        "If you want a life that feels full when the spotlight is off, build the kind of week you can respect—not the kind of week that merely impresses.",
      ),
    ),
    ...ctaBlock(
      "For a structured path from inner intention to outward action—without sacrificing spiritual integrity for ambition—read Kevin Adou’s",
      "Prosper Without Compromise:",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000001",
    slug: "fulfillment-isnt-a-mood-its-a-practice",
    locale: "en",
    title: "Fulfillment isn’t a mood—it’s a practice",
    excerpt:
      "Peak moments create memories. Quiet fidelity to your values creates a life that still feels like yours on an ordinary Tuesday.",
    content_json: content,
    seo_keywords:
      "personal growth, fulfillment, intentional living, values, habits, Prosper Without Compromise, Kevin Adou",
    status: "published",
    published_at: "2026-05-01T12:00:00.000Z",
    created_at: "2026-05-01T12:00:00.000Z",
    updated_at: "2026-05-01T12:00:00.000Z",
  };
}

function postQuietFear(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Comparison doesn’t just steal joy—it steals truth. Here is how to convert “behind” into "),
      bold("clarity"),
      text(" without shaming yourself into hustle."),
    ),
    h2(text("The opener")),
    paragraph(
      text(
        "The phrase arrives quietly, often late at night: I should be further along. It sounds like ambition. Frequently, it is fear wearing ambition’s clothes—fear of wasting your life, being ordinary, or being exposed as someone who “had potential” but never proved it.",
      ),
    ),
    paragraph(
      text(
        "This fear is not proof you are failing. It is proof you care. The problem is that, unmanaged, it becomes a tyrant: it pushes you to perform, punishes you for resting, and convinces you that fulfillment is always one more achievement away.",
      ),
    ),
    h2(text("Reframe: “along” compared to what?")),
    paragraph(
      text(
        "Further along implies a single track and an objective ranking. Real lives are not linear. Your growth is best measured by honesty (what is true right now), agency (what you can influence), and covenant (what you refuse to betray in the process).",
      ),
    ),
    h2(text("Why shame is a bad strategist")),
    paragraph(
      text(
        "Shame accelerates motion but degrades judgment. It produces short bursts of effort and long stretches of burnout. If your plan relies on feeling “not enough,” you will keep solving the wrong problem.",
      ),
    ),
    h2(text("Three moves that replace panic with traction")),
    orderedList(
      listItem(
        paragraph(
          bold("Separate facts from fiction—on paper."),
          text(
            " Write facts (what is objectively true this month) and stories (what you tell yourself they mean). Most suffering sits in the second list. This is precision, not positivity.",
          ),
        ),
      ),
      listItem(
        paragraph(
          bold("Redefine progress as alignment."),
          text(
            " Progress can be a smaller life on the outside and a truer life on the inside: fewer performances, clearer boundaries, braver honesty. That compounds—even when it doesn’t photograph well.",
          ),
        ),
      ),
      listItem(
        paragraph(
          bold("Choose one courageous constraint."),
          text(
            " Fulfillment often appears when you stop trying to be limitless. One constraint—ending work at a fixed time, reducing commitments, refusing a role that misnames your values—can do more than another productivity hack.",
          ),
        ),
      ),
    ),
    h2(text("Key takeaways")),
    bulletList(
      listItem(paragraph(text("“Behind” is often fear, not a verdict."))),
      listItem(paragraph(text("Comparison collapses context; fulfillment requires it."))),
      listItem(paragraph(text("Steady growth favors constraints more than intensity."))),
    ),
    h2(text("Bottom line")),
    paragraph(
      text(
        "You do not need to win an imaginary race to live a meaningful life. You need a truthful map, a humane pace, and the courage to honor what matters before the world agrees.",
      ),
    ),
    ...ctaBlock(
      "For a faith-informed framework that aligns ambition with inner peace—without turning your life into a performance—read Kevin Adou’s",
      "Prosper Without Compromise:",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000002",
    slug: "the-quiet-fear-behind-i-should-be-further-along",
    locale: "en",
    title: "The quiet fear behind “I should be further along”",
    excerpt:
      "Comparison doesn’t just steal joy—it steals truth. Here’s how to convert “behind” into clarity without shaming yourself into hustle.",
    content_json: content,
    seo_keywords:
      "comparison, personal growth, shame, anxiety, purpose, fulfillment, Prosper Without Compromise",
    status: "published",
    published_at: "2026-05-02T12:00:00.000Z",
    created_at: "2026-05-02T12:00:00.000Z",
    updated_at: "2026-05-02T12:00:00.000Z",
  };
}

function postCarrySetDown(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Maturity is not becoming tougher. It’s becoming honest about weight. "),
      bold("Fulfillment begins when you stop confusing responsibility with identity."),
    ),
    h2(text("The opener")),
    paragraph(
      text(
        "Many capable people do not feel depleted because they lack discipline. They feel depleted because they are carrying more than they agreed to carry—and calling it loyalty.",
      ),
    ),
    paragraph(
      text(
        "Personal growth, at a certain stage, stops asking what you can achieve and starts asking what you can sustain without quietly resenting your own life.",
      ),
    ),
    h2(text("Reframe: carrying can be noble—and still corrosive")),
    paragraph(
      text(
        "Some burdens deserve your shoulders: family caregiving, leadership in crisis, promises kept. But identity can smuggle in weight that does not belong there: the need to be indispensable; the fear of disappointing people who won’t adjust expectations; the addiction to being the person who handles everything.",
      ),
    ),
    paragraph(
      text(
        "Fulfillment is not the absence of difficulty. It is the removal of hidden taxes you pay to remain admired.",
      ),
    ),
    h2(text("The three inventories high performers avoid")),
    h3(text("1) The merit inventory")),
    paragraph(
      text(
        "List what you believe you must earn before you are allowed to rest, be loved, or be whole. If your rest requires a reward, your life has become a conditional contract with yourself.",
      ),
    ),
    h3(text("2) The role inventory")),
    paragraph(
      text(
        "Name the roles you perform publicly versus the person you are becoming privately. Widening that gap creates loneliness—even in success.",
      ),
    ),
    h3(text("3) The exit inventory")),
    paragraph(
      text(
        "Identify one obligation you can set down, delegate, renegotiate, or complete with honor—not abandonment, but adulthood.",
      ),
    ),
    h2(text("What setting down costs—and what it buys")),
    paragraph(
      text(
        "It can cost approval and convenience. It might disappoint someone who benefited from your over-functioning. What it buys is steadier presence, cleaner energy, and integrity that makes prosperity feel like peace instead of pressure.",
      ),
    ),
    h2(text("Key takeaways")),
    bulletList(
      listItem(paragraph(text("Fulfillment requires honest weight management, not more toughness."))),
      listItem(paragraph(text("Hidden roles create hidden fatigue."))),
      listItem(
        paragraph(text("Setting down is often the most mature form of responsibility.")),
      ),
    ),
    h2(text("Bottom line")),
    paragraph(
      text(
        "A full life is not the sum of everything you can carry. It is the disciplined craft of carrying what is truly yours—and releasing what never should have been.",
      ),
    ),
    ...ctaBlock(
      "For a blueprint that moves from intention through strategy, faith, and disciplined action—so success doesn’t hollow out your soul—read Kevin Adou’s",
      "Prosper Without Compromise:",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000003",
    slug: "what-you-carry-and-what-you-set-down",
    locale: "en",
    title: "What you’re willing to carry—and what you’re ready to set down",
    excerpt:
      "Maturity isn’t becoming tougher. It’s becoming honest about weight. Fulfillment begins when you stop confusing responsibility with identity.",
    content_json: content,
    seo_keywords:
      "boundaries, burnout, identity, responsibility, personal growth, fulfillment, Prosper Without Compromise",
    status: "published",
    published_at: "2026-05-03T12:00:00.000Z",
    created_at: "2026-05-03T12:00:00.000Z",
    updated_at: "2026-05-03T12:00:00.000Z",
  };
}
