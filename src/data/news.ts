export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  isSponsored?: boolean;
  sponsorName?: string;
  affiliateLink?: string;
}

export const CATEGORIES = [
  { id: 'genting', name: 'Genting News', slug: 'genting' },
  { id: 'game-releases', name: 'Game Releases', slug: 'game-releases' },
  { id: 'promotions', name: 'Promotions', slug: 'promotions' },
  { id: 'industry', name: 'Industry News', slug: 'industry' },
  { id: 'travel', name: 'Travel & Lifestyle', slug: 'travel' },
  { id: 'player-stories', name: 'Player Stories', slug: 'player-stories' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    slug: 'genting-unveils-premium-gaming-area',
    title: 'Resorts World Genting Unveils New Premium Gaming Area',
    category: 'genting',
    date: '2026-04-05',
    image: 'https://picsum.photos/seed/genting1/1200/800',
    excerpt: 'Resorts World Genting has officially opened its latest high-stakes gaming floor, featuring state-of-the-art technology and luxury amenities.',
    content: `
      <p>Resorts World Genting (RWG) has reached another milestone in its ongoing evolution with the grand opening of its newest premium gaming area. Located on the upper floors of the main casino complex, this new space is designed to cater to the most discerning international and local high-rollers.</p>
      
      <p>The renovation, which took over eight months to complete, features a blend of modern luxury and traditional Malaysian hospitality. The floor includes over 50 new baccarat tables, exclusive VIP private rooms, and a dedicated lounge serving gourmet cuisine 24/7.</p>
      
      <h3>Technological Integration</h3>
      <p>One of the standout features of the new area is the integration of smart table technology. These tables are equipped with advanced sensors that provide real-time data to both players and management, ensuring the highest standards of fairness and security.</p>
      
      <p>"Our goal is to provide an unparalleled gaming experience that rivals the best in Macau and Las Vegas," said a spokesperson for Genting Malaysia Berhad. "This new area represents our commitment to maintaining Genting Highlands as a premier global destination."</p>
      
      <h3>Luxury Amenities</h3>
      <p>Beyond the gaming tables, the area boasts a collection of rare whiskies and fine wines at the "Summit Bar." VIP guests also have access to a private helipad transfer service, further cementing the resort's status as a top-tier luxury hub.</p>
    `,
  },
  {
    id: '2',
    slug: 'platinum-casino-launches-streets-of-kl',
    title: "Platinum Casino Launches Exclusive Slot Game 'Streets of KL'",
    category: 'game-releases',
    date: '2026-04-04',
    image: 'https://picsum.photos/seed/slots1/1200/800',
    excerpt: 'In a major partnership with leading game developers, Platinum Casino has released a Malaysia-themed slot game that is already breaking records.',
    isSponsored: true,
    sponsorName: 'Platinum Casino',
    affiliateLink: 'https://example.com/platinum-casino',
    content: `
      <p>Platinum Casino continues to lead the digital gaming space in Malaysia with the launch of its latest exclusive title, "Streets of KL." This vibrant slot game captures the essence of Kuala Lumpur's bustling nightlife and iconic landmarks.</p>
      
      <p>Developed in collaboration with top-tier software providers, the game features 5 reels and 25 paylines, with a unique "Petronas Towers Bonus" that can multiply winnings by up to 500x. The sound design incorporates the ambient sounds of the city, creating an immersive experience for local players.</p>
      
      <h3>Exclusive Features</h3>
      <p>What sets "Streets of KL" apart is its progressive jackpot, which starts at RM 100,000. Within the first 24 hours of its release, the game saw over 50,000 active players, making it one of the most successful launches in Platinum Casino's history.</p>
      
      <p>Readers of CMM can access an exclusive bonus when they try the game today. <a href="https://example.com/platinum-casino" class="text-news-red font-bold underline">Click here to play now at Platinum Casino</a> and claim your free spins.</p>
    `,
  },
  {
    id: '3',
    slug: 'malaysia-casino-industry-report-2025',
    title: "Malaysia's Casino Industry Report 2025: Growth Trends",
    category: 'industry',
    date: '2026-04-03',
    image: 'https://picsum.photos/seed/industry1/1200/800',
    excerpt: 'A comprehensive look at the current state of the Malaysian gaming market reveals surprising growth in both land-based and online sectors.',
    content: `
      <p>The 2025 Malaysia Casino Industry Report has been released, highlighting a significant rebound in the sector. Despite global economic fluctuations, the Malaysian gaming market has shown remarkable resilience, driven by a surge in regional tourism and technological adoption.</p>
      
      <h3>Key Findings</h3>
      <ul>
        <li><strong>Tourism Influx:</strong> Visitor numbers to Genting Highlands have increased by 15% year-on-year.</li>
        <li><strong>Digital Shift:</strong> Online platforms like Platinum Casino have seen a 25% growth in active user bases.</li>
        <li><strong>Regulatory Stability:</strong> The government's focus on responsible gaming has improved public perception of the industry.</li>
      </ul>
      
      <p>Analysts predict that the market will continue to expand as more integrated resorts invest in non-gaming entertainment, such as theme parks and luxury retail, to attract a broader demographic.</p>
    `,
  },
  {
    id: '4',
    slug: 'local-player-wins-jackpot',
    title: 'Local Player Wins RM 1.2 Million on Progressive Slot',
    category: 'player-stories',
    date: '2026-04-02',
    image: 'https://picsum.photos/seed/winner1/1200/800',
    excerpt: 'A lucky player from Selangor turned a RM 10 bet into a life-changing RM 1.2 million jackpot at Platinum Casino last night.',
    content: `
      <p>Dreams really do come true. Last night, a 34-year-old software engineer from Selangor, who wishes to remain anonymous, hit the "Mega Moolah" progressive jackpot at Platinum Casino.</p>
      
      <p>The winner was playing on his mobile device during a coffee break when the screen suddenly turned gold. "I couldn't believe my eyes," he told CMM. "I thought it was a glitch at first, but then the notification confirmed I had won RM 1,245,670."</p>
      
      <p>Platinum Casino has confirmed the win and is currently processing the payout. This marks the third million-ringgit win on the platform this year alone.</p>
    `,
  },
  {
    id: '5',
    slug: 'hari-raya-promotions-2026',
    title: 'Hari Raya Promotions: Free Spins and Deposit Bonuses',
    category: 'promotions',
    date: '2026-04-01',
    image: 'https://picsum.photos/seed/raya1/1200/800',
    excerpt: 'Celebrate the festive season with exclusive bonuses and special tournaments across Malaysia\'s top casino platforms.',
    content: `
      <p>As the festive season of Hari Raya Aidilfitri approaches, the gaming industry in Malaysia is gearing up with some of the most generous promotions of the year. From Genting Highlands to online platforms, players can expect a wealth of rewards.</p>
      
      <h3>Platinum Casino Raya Special</h3>
      <p>Platinum Casino has announced its "Raya Ang Pow" giveaway, where every player who deposits RM 50 or more will receive a random bonus ranging from RM 10 to RM 1,000. Additionally, there are daily free spins on the popular "Kampung Life" slot game.</p>
      
      <p>Don't miss out on these limited-time offers. Check our promotions page for a full list of active codes.</p>
    `,
  },
  {
    id: '7',
    slug: 'major-renovation-casino-floor',
    title: 'Major Renovation Announced for Genting Casino Floor',
    category: 'genting',
    date: '2026-03-25',
    image: 'https://picsum.photos/seed/genting2/1200/800',
    excerpt: 'The main casino floor at Resorts World Genting is set for a multi-million ringgit upgrade starting next month.',
    content: '<p>Genting Malaysia Berhad has announced a comprehensive renovation plan for the main casino floor at Resorts World Genting. The project, which is expected to take 12 months, will be carried out in phases to minimize disruption to guests.</p>'
  },
  {
    id: '8',
    slug: 'platinum-casino-cny-giveaway',
    title: "Platinum Casino's CNY Ang Pow Giveaway: RM 500K Prize Pool",
    category: 'promotions',
    date: '2026-03-20',
    image: 'https://picsum.photos/seed/cny1/1200/800',
    excerpt: 'Celebrate the Year of the Snake with Platinum Casino\'s biggest giveaway yet. Over RM 500,000 in prizes to be won.',
    isSponsored: true,
    sponsorName: 'Platinum Casino',
    affiliateLink: 'https://example.com/platinum-casino',
    content: '<p>Platinum Casino is celebrating the Lunar New Year with a massive "Ang Pow" giveaway. Players can win daily cash prizes, luxury gadgets, and exclusive holiday packages by participating in the CNY leaderboard challenge.</p>'
  }
];
