# Sports Betting


 ## The Mechanics of Gambling

 Sports books offer many events that can be bet on. Really anything in sports that can be quantified like an individual's scores, yards gained by an individual or team, position in an overall ranking, and of course the binary 'will this team/person win?' is something that sports books want to have people gambling on. 

 When gambling on an event you are given 'odds' which describe your potential winnings if your bet pays off and you always lose your initial bet is it does not. I will focus on American odds, which are most relevant to me, and maybe delve into European, Asian, and prediction market odds if I see their relevance. 

 ### American Odds

 
 Ganerally in American odds, negative odds or numbers indicate a favorite to win and positive odds indicate an underdog. This is advantageous for the sportsbook because the cognitive bias towards positive things pushes people to want to bet on more unlikely things which generally seem to benefit the sports book(think about how sportbooks want all of their customers betting on highly unlikely parlays). 

 When gambling in America you will see a board that is similar to here. 
 
  ![alt text](image.png)
  
  Lets break down what it means so we can appropriately analyze what this means. Look at the betting opportunities and don't worry about the 'Spread', 'Total', and 'Money' aspects but just notice that each option in this advertised matrix gives odds looking like '-110', '-10,000', and '+2,000'.




 Given some binary event $A$ we will notate the event that $A$ happens as $A^+$ and $A$ does not happen as $A^-$. We can say $A$ represents a fighter winning a fight, a team losing a football game, a basketball player scoring more than 7.5 three pointers, or someone streaking at the superbowl. These events will be given odds where a plus notates how much a gambler profits from a 100$ bet and negative notates how much is necessary for someone to bet to win 100$ if the bet pays off. An important feature of these odds too is that they are linear, so if you have a '+200' for 150$ then a win on that bet will get you 300$. 

 Simple enough, but this back and forth inversion doesn't work smoothly in the human brain and for analyzing probabilities of events so lets convert these odds to implied probabilities. Normally odds will always show the bigger number between the + and - odds. Suppose we have a bet that is -110 odds we can solve for the equivalent positive odds by considering the linearity of our bet payout.
 $$
110 \rightarrow 100 \\
$$
Here we can apply the linearity of these odds to get 
$$
\frac{10}{11}\cdot 110 = 100\rightarrow \frac{10}{11}\cdot 100 \approx 91
 $$

 to have +91 equivalent odds. Here the negative odds have the bigger number so that is what is displayed in the sportsbook. 

  #### Converting Equivalent Odds 

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

#### Finding Arbitrage in the Odds

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


#### Extracting Implied Probabilities

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

#### Arbitrage conditions in American Odds
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

### Prediction Markets

Prediction markets like Kalshi and Polymarket are making waves in the finance and gaming space after being legalized nationally. Do not be confused by the language and distinct mechanics, this is gambling. 

#### How Prediction Markets Work(and why this is relevant)

Went skiing