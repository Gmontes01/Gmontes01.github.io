 # The Mechanics of Gambling

 Sports books offer many events that can be bet on. Really anything in sports that can be quantified like an individual's scores, yards gained by an individual or team, position in an overall ranking, and of course the binary 'will this team/person win?' is something that sports books want to have people gambling on. 

 When gambling on an event you are given 'odds' which describe your potential winnings if your bet pays off and you always lose your initial bet is it does not. I will focus on American odds, which are most relevant to me, and maybe delve into European, Asian, and prediction market odds if I see their relevance. 

 ## American Odds

 
 Generally in American odds, negative odds or numbers indicate a favorite to win and positive odds indicate an underdog. This is advantageous for the sportsbook because the cognitive bias towards positive things pushes people to want to bet on more unlikely things which generally seem to benefit the sports book(think about how sportsbooks want all of their customers betting on highly unlikely parlays). 

 When gambling in America you will see a board that is similar to here. 
 
  ![alt text](image.png)
  
  Lets break down what it means so we can appropriately analyze what this means. Look at the betting opportunities and don't worry about the 'Spread', 'Total', and 'Money' aspects but just notice that each option in this advertised matrix gives odds looking like '-110', '-10,000', and '+2,000'.




 Given some binary event $A$ we will notate the event that $A$ happens as $A^+$ and $A$ does not happen as $A^-$. We can say $A$ represents a fighter winning a fight, a team losing a football game, a basketball player scoring more than 7.5 three pointers, or someone streaking at the Super Bowl. These events will be given odds where a plus notates how much a gambler profits from a $100 bet and negative notates how much is necessary for someone to bet to win $100 if the bet pays off. An important feature of these odds too is that they are linear, so if you have a '+200' for $150 then a win on that bet will get you $300. 

 Simple enough, but this back and forth inversion doesn't work smoothly in the human brain and for analyzing probabilities of events so lets convert these odds to implied probabilities. Normally odds will always show the bigger number between the + and - odds. Suppose we have a bet that is -110 odds we can solve for the equivalent positive odds by considering the linearity of our bet payout.
 $$
110 \rightarrow 100 \\
$$
Here we can apply the linearity of these odds to get 
$$
\frac{10}{11}\cdot 110 = 100\rightarrow \frac{10}{11}\cdot 100 \approx 91
 $$

 to have +91 equivalent odds. Here the negative odds have the bigger number so that is what is displayed in the sportsbook. 

  ### Converting Equivalent Odds 

 We can convert between positive and negative odds using the linearity property of bet payoffs. Given a bet has -X odds we can apply the same formula as before and multiply the bet and payoff by $\frac{100}{X}$
 
 $$
 \frac{100}{X} \cdot X = 100 \rightarrow 100\cdot\frac{100}{X} = \frac{10,000}{X}
 $$
  to get the equivalent positive odds. Given this formula you can quickly convert -200, -250, -333, -500 odds give you +50, +40, +30, and +20 respectively. This also gets you a quick way to compare odds. This gives us the idea that -2X odds are half as good as -X odds. 

  We can also convert odds the other way by taking odds of +Y and multiplying by 

  $$
  100\frac{100}{Y} = \frac{10,000}{Y}\rightarrow Y\frac{100}{Y} = 100
 $$ 

 so the mapping from one kind of odds to another is always dividing 10,000 by the odds.

Ultimately, the goal of converting these odds is to be able to make a better comparison between the odds so we can compare the positive odds to positive odds instead of having to consider positive odds to negative odds. 

### Finding Arbitrage in the Odds

Consider a bet on a game where either team A or B will win with -X and +Y odds respectivly, and there are no ties allowed. We can try and create an arbitrage portfolio of bets where you bet $X$ dollars on team A and $\frac{100\cdot X}{Y}$ dollars on team B. We can describe our net profit with a function 

$$
f(bet) = \begin{cases}
 100 - \frac{100\cdot X}{Y} & \text{team A wins} \\
\frac{100\cdot X}{Y}\cdot \frac{Y}{100} - X & \text{team B wins}
\end{cases}
$$

which gives us 0 in the case when team B wins so if that setup gives any profit when team A wins then we have arbitrage. This is simply evaluated as checking if 
$$
100 > 100\frac{X}{Y}
$$

or simply

$$
Y > X
$$
. From my experience and intuition, it would make sense for sports books not to arb themselves so I simply don't expect this to every occur on a single sportsbook and I would also expect sports books to typically give themselves enough edge so that it would at least be rate for this to occur across sports books.


### Extracting Implied Probabilities

Since I have spent more time studying probabilities than gambling, it is useful to try and think about how these odds translate into implied probabilities. 

Assuming a zero expectation of each sports bet(which is a generous assumption) we derive the equation for implied probabilities for a an underdog +Y bet being

$$
\mathbb{E}[bet^+_{100}] = p_{implied}^+ \cdot Y - (1-p_{implied}^+)\cdot 100 = 0
$$

implying 

$$
p_{implied}^+ = \frac{100}{100 + Y}
$$.

Both of these formulas should be intuitive since we could also derive probabilities as 

$$
p_{implied} = \frac{\text{stake}}{\text{total payout}}
$$

We can analyze the 

and since we are now only thinking in terms of positive bets we can convert the implied probability of a -X bet to get implied odds of that bet losing given the odds of the contrary bet as

$$
p_{implied}^- = \frac{100}{100 + \frac{10,000}{X}} = \frac{X}{X + 100}
$$

### Arbitrage conditions in American Odds
We would expect the sportsbooks to take a percentage of edge in these bets thus making us expect that the actual expectations of each bet to be slightly below zero in reality. Here we can use this idea to give us a kind of efficient market hypothesis of the sportsbook assuming no arbitrage. Thus giving us

$$
\mathbb{E}_{reality}[bet_{100}^+] < p_{implied}^+ \cdot Y - (1-p_{implied}^+)\cdot 100
$$
and 
$$
\mathbb{E}_{reality}[bet_{100}^-] < p_{implied}^- \cdot \frac{10,000}{X} - (1-p_{implied}^-)\cdot 100
$$ 
. Since the value of a bet is obviously monotonic with respect to the implied probability we can conclude that

$$
p^+_{reality} < p_{implied}^+ \\
p^-_{reality} < p_{implied}^- \\ 
1 - p^-_{reality} = p^+_{reality} > 1 - p_{implied}^-
$$

,letting us find the bounds for the sportsbook's actual expected probability of the event taking place as

$$
1 - p_{implied}^- < p_{reality}^+ < p_{implied}^+ 
$$
. So we can imagine the probabilities on the number line 

  <div style="display: flex; width: 100%; border: 2px solid black; background-color: white; height: 60px; align-items: stretch; position: relative; margin: 60px 0; font-family: sans-serif;">

  <!-- Segment 0 → 0.10 -->
  <div style="flex: 0 0 10%; border-right: 2px solid black; position: relative;">
    <!-- TOP label (first divider) -->
    <span style="position: absolute; top: -35px; right: -45px; font-style: italic;">
      1 − p<sub>implied</sub><sup>−</sup>
    </span>
    <!-- BOTTOM numbers -->
    <span style="position: absolute; bottom: -25px; left: -5px;">0</span>
    <span style="position: absolute; bottom: -25px; right: -15px;">0.10</span>
  </div>

  <!-- Segment 0.10 → 0.25 -->
  <div style="flex: 0 0 15%; border-right: 2px solid black; position: relative;">
    <!-- TOP label (second divider) -->
    <span style="position: absolute; top: -35px; right: -40px; font-style: italic;">
      p<sub>reality</sub><sup>+</sup>
    </span>
    <!-- BOTTOM number -->
    <span style="position: absolute; bottom: -25px; right: -12px;">0.25</span>
  </div>

  <!-- Segment 0.25 → 0.45 -->
  <div style="flex: 0 0 20%; border-right: 2px solid black; position: relative;">
    <!-- TOP label (third divider) -->
    <span style="position: absolute; top: -35px; right: -40px; font-style: italic;">
      p<sub>implied</sub><sup>+</sup>
    </span>
    <!-- BOTTOM number -->
    <span style="position: absolute; bottom: -25px; right: -15px;">0.45</span>
  </div>

  <!-- Segment 0.45 → 1.0 -->
  <div style="flex: 1; position: relative;">
    <span style="position: absolute; bottom: -25px; right: -10px;">1.0</span>
  </div>

</div>

I like to imagine the implied probability is is the space from zero to $p_{implied}^+$ is the probability that you pay for to bet that the underdog team will win. Overestimating probability that others pay for as a sportsbook forces the customers to accept lower odds that what would the sportsbook would fairly give you. Likewise, the same thing happens with the odds of the event not happening taking up the space between $p_{implied}^-$ and the right side of the bar. For the same rationale, you also overpay or the event that the underdog loses. 

## Prediction Markets

Prediction markets like Kalshi and Polymarket are making waves in the finance and gaming space after being legalized nationally. Do not be confused by the language and slightly distinct mechanics, this is also gambling. 

### How Prediction Markets Work(and why this is relevant)

When looking at my arbitrage strategy I found that the tightest markets for me to hedge my bets was on prediction markets. The way these markets work is that you are able to buy contracts for events which pay out one unit(dollar) upon the event taking place. This event can be Jerome Powell saying a specific word during FOMC, a team winning a sports bet, or China invading Taiwan by a specific date.

These markets work by allow individuals to buy and sell these events at a specific price normally <1. These markets are free to participate in, most likely because the main mechanism of these markets is not to extract edge out of its users like sportsbooks but to provide data representing public sentiment on the likelyhood of an event occurring thus giving the best proxy for the likelihood of said event occuring. This works by exploiting the idea of wisdom of the crowd giving trustworthy public opinion on these events.

Say Georgia Tech is playing U(sic)GA in a basketball game and GT is the heavy favorite. In this specific instance the market determines that the value of a 1 dollar payout upon GT's winning is 90 cents. This gives an implied 90% chance that GT will win the game since market forces deem selling GT for any price above 90 cents as having edge and buying GT at any price below 90 cents as also having edge, so intuitively 90 cents is where the EV of the trade is 0 and thus gives a fair value.

 Conversely, if GT is trading at 90 cents then we can imply that U(sic)GA is trading at 10 cents. This can be reasoned with contradiction. Suppose that U(sic)GA is trading a 0.9 cents while GT trades at 90 cents then we have an opportunity to bet $90 + 9 = 99$ cents to guarantee a payout of 1 dollar thus presenting an arbitrage of 1 cent. In this example, you can expect logical market participants to buy these contracts thus raising their prices until the arbitrage is ironed out of the market. Conversely the market allows you to sell contracts thus representing the negation of the event. So if we have GT trading at 91 cents and U(sic)GA trading at 10 cents then you sell GT and U(sic)GA for $91 + 10 = 1.01$ and gauranttee yourself to payout $1 in the future also getting 1 cent of arbitrage throughout this event. Because these events are then being sold arbitrageurs also push the prices down when they can be sold too high. This is the main mechanic that allows these prediction markets to give a sort of best truth to the probability of an event taking place.

Because of technically advanced market makers like SIG taking a role in these prediction markets, we can generally assume these markets to be arbitrage free since HFT/quant firms can be thought to acts as enforcing market efficiency. Because of this you can generally expect to buy covering sets of the future at at least a dollar and sell covering sets of the future at at most a dollar because these markets typically have some non-zero spread in them.

### Hedging bets using Prediction Markets

As a finance student, I have developed the intuition to fight against variance of any given financial position. To minimize variance, the strategy I will use will be to hedge all bets that I make in sports books with contrary positions in prediction markets. 

Consider I make any sports bet with +A odds for event '+', as opposed to event '-'. The mental model that I have is that you are paying presently for the payout structure with bet size B in the binary case with
$$
f^{+}_{sportsbook}(B) = \begin{cases}
 B + \frac{A}{100}\cdot B & \text{if +} \\
0 & \text{if -}
\end{cases}
$$

,and I can hedge in a prediction market with traded odds of event '-' as $p_{-}$ as having the payout function
$$
g_{\text{prediction market}}^{-}(p_{-}\cdot(B + \frac{A}{100}\cdot B)) = \begin{cases}
0 & \text{if +} \\
B + \frac{A}{100}\cdot B & \text{if -}
\end{cases}
$$
.
This setup allows us to guarantee a payout of $B + \frac{A}{100}\cdot B$ for a cost of $B + p_{-}\cdot(B + \frac{A}{100}\cdot B)$.
Because of a similar arbitrage argument you can expect generally that 
$$
B + p_{-}\cdot(B + \frac{A}{100}\cdot B) > B + \frac{A}{100}\cdot B
$$.

### When to Hedge

Because the profit incentive of sportsbook is to facilitate bets with an edge to the sportsbook, it is common for these sports books to try and entice players to begin gambling on their books using one time promotions that give up a little bit of edge in the expectation that repeated gambler will continually pay back the amount of edge that the sportsbook gives to entice their business. These deals are typically offered in 3 main types of promotions.
$$
\text{profit boosting} \\
\text{insurance} \\
\text{free bets}
$$


