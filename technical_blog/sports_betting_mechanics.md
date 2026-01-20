 # The Mechanics of Gambling

 *draft

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

###  Bets as Piecewise functions
To try and describe combining wagers lets define them as a payout function dependent on the state of the world in the future where we will describe a +Y bet of size S on team A as a bet that has cost of S and a payout function of 

$$
f_{\text{team A}}^{+Y}(S)=\begin{cases}
S\cdot(1 + \frac{Y}{100}) & \text{team A wins} \\
0 & \text{team A loses}
\end{cases}
$$

and conversely if team B has -X odds then for a bet of the same size we will notate the bet as a payoff function

$$
f_{\text{team B}}^{-X}(S)=\begin{cases}
S\cdot(1 + \frac{100}{X}) & \text{team A wins} \\
0 & \text{team A loses}
\end{cases}
$$.



### Extracting Implied Probabilities

Since I have spent more time studying probabilities than gambling, it is useful to try and think about how these odds translate into implied probabilities. To get implied probabilities we need to look at the profit function which we can notate similarly 

$$
\Pi_{\text{team A}}^{+Y} = f_{\text{team A}}^{+Y}(S) - S = \begin{cases}
S\cdot(\frac{Y}{100}) & \text{team A wins} \\
-S & \text{team A loses}
\end{cases}
$$

Assuming a zero expectation of each sports bet(which is a generous assumption) we derive the equation for implied probabilities for an underdog +Y bet being

$$
\mathbb{E}[\Pi_{\text{team A}}^{+Y}] = p_{implied}^+ \cdot \frac{S}{100}\cdot ( Y) - (1-p_{implied}^+)\cdot S = 0
$$

implying 

$$
p_{implied}^+ \cdot (\frac{S}{100}\cdot Y + S) = S\\
$$
giving 

$$
p_{implied}^+ = \frac{100}{100 + Y}
$$.

Both of these formulas should be intuitive since we could also derive probabilities as 

$$
p_{implied} = \frac{\text{stake}}{\text{total payout}}
$$

Since we are now only thinking in terms of positive bets we can convert the implied probability of a -X bet to get implied odds of the favorite side of the bet as

$$
p_{implied}^- = \frac{100}{100 + \frac{10,000}{X}} = \frac{X}{X + 100}
$$

### American Odds and probabilities

\#continue revising here

We would expect the sportsbooks to take a percentage of edge in these bets thus making us expect that the actual expectations of each bet to be slightly below zero in reality. Consider making a bet with American odds +Y.

 Here we can use this idea to give us a kind of efficient market hypothesis of the sportsbook assuming no arbitrage. Thus giving us

$$
\mathbb{E}_{reality}[bet_{100}^+] = 
\\
p_{reality}^+ \cdot Y - (1-p_{reality}^+)\cdot 100 < 0 = p_{implied}^+ \cdot Y - (1-p_{implied}^+)\cdot 100
$$
and 
$$
\mathbb{E}_{reality}[bet_{100}^-] = \\
p_{reality}^+ \cdot Y - (1-p_{reality}^+)\cdot 100 < 0 = p_{implied}^- \cdot \frac{10,000}{X} - (1-p_{implied}^-)\cdot 100
$$ 
. Since the expected value of a bet is obviously monotonic with respect to the implied probability we can conclude that

$$
p^+_{reality} < p_{implied}^+ \\
p^-_{reality} < p_{implied}^- \\ 
1 - p^-_{reality} = p^+_{reality} > 1 - p_{implied}^-
$$

,letting us find the bounds for the sportsbook's actual expected probability of the event taking place as

$$
1 - p_{implied}^- < p_{reality}^+ < p_{implied}^+ 
$$
. So we can imagine the probabilities on the number line looking like this number line below.

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

I also like to think about the probabilities existing as the shaded region of the line. Here you can see the region $p_{implied}^{-}$

<div style="display: flex; width: 100%; border: 2px solid black; background-color: white; height: 60px; align-items: stretch; position: relative; margin: 60px 0; font-family: sans-serif;">

  <div style="flex: 0 0 10%; border-right: 2px solid black; position: relative; background-color: white;">
    <span style="position: absolute; top: -35px; right: -45px; font-style: italic; white-space: nowrap;">
      1 − p<sub>implied</sub><sup>−</sup>
    </span>
    <span style="position: absolute; bottom: -25px; left: -5px;">0</span>
    <span style="position: absolute; bottom: -25px; right: -15px;">0.10</span>
  </div>

  <div style="flex: 0 0 15%; border-right: 2px solid black; position: relative; background-color: red;">
    <span style="position: absolute; top: -35px; right: -40px; font-style: italic; white-space: nowrap;">
      p<sub>reality</sub><sup>+</sup>
    </span>
    <span style="position: absolute; bottom: -25px; right: -12px;">0.25</span>
  </div>

  <div style="flex: 0 0 20%; border-right: 2px solid black; position: relative; background-color: red;">
    <span style="position: absolute; top: -35px; right: -40px; font-style: italic; white-space: nowrap;">
      p<sub>implied</sub><sup>+</sup>
    </span>
    <span style="position: absolute; bottom: -25px; right: -15px;">0.45</span>
  </div>

  <div style="flex: 1; position: relative; background-color: red;">
    <span style="position: absolute; bottom: -25px; right: -10px;">1.0</span>
  </div>

</div>

and the following image for $p_{implied}^+

<div style="display: flex; width: 100%; border: 2px solid black; background-color: white; height: 60px; align-items: stretch; position: relative; margin: 60px 0; font-family: sans-serif;">

  <div style="flex: 0 0 10%; border-right: 2px solid black; position: relative; background-color: red;">
    <span style="position: absolute; top: -35px; right: -45px; font-style: italic; white-space: nowrap;">
      1 − p<sub>implied</sub><sup>−</sup>
    </span>
    <span style="position: absolute; bottom: -25px; left: -5px;">0</span>
    <span style="position: absolute; bottom: -25px; right: -15px;">0.10</span>
  </div>

  <div style="flex: 0 0 15%; border-right: 2px solid black; position: relative; background-color: red;">
    <span style="position: absolute; top: -35px; right: -40px; font-style: italic; white-space: nowrap;">
      p<sub>reality</sub><sup>+</sup>
    </span>
    <span style="position: absolute; bottom: -25px; right: -12px;">0.25</span>
  </div>

  <div style="flex: 0 0 20%; border-right: 2px solid black; position: relative; background-color: red;">
    <span style="position: absolute; top: -35px; right: -40px; font-style: italic; white-space: nowrap;">
      p<sub>implied</sub><sup>+</sup>
    </span>
    <span style="position: absolute; bottom: -25px; right: -15px;">0.45</span>
  </div>

  <div style="flex: 1; position: relative; background-color: white;">
    <span style="position: absolute; bottom: -25px; right: -10px;">1.0</span>
  </div>

</div>

## Prediction Markets

Prediction markets like Kalshi and Polymarket are making waves in the finance and gaming space after being legalized nationally. Do not be confused by the language and slightly distinct mechanics, this is also gambling. 

### How Prediction Markets Work(and why this is relevant)

When looking at my arbitrage strategy I found that the tightest markets for me to hedge my bets was on prediction markets. The way these markets work is that you are able to buy contracts for events which pay out one unit(dollar) upon the event taking place. This event can be Jerome Powell saying a specific word during FOMC, a team winning a sports bet, or China invading Taiwan by a specific date.

These markets work by allowing individuals to buy and sell these events at a specific price normally <1. These markets are lower cost to participate in, most likely because the main mechanism of these markets is not to extract edge out of its users like sportsbooks but to provide data representing public sentiment on the likelihood of an event occurring thus giving the best proxy for the likelihood of said event occuring. This works by using idea of wisdom of the crowd giving trustworthy public opinion on these events.

Given a mathematical inclination to approach these topics, it is relieving to see that prediction markets work by trading contracts of an event which resolve to a value of 1 if the event takes place and 0 if the event does not take place. The mechanics for guaranteeing fairness and trust in these evaluations of events are another interesting topic more related to crypto, so I will likely save that for another technical blog post.

Of course, if the event is certain to occur or not then there is no reason to trade, but the role of prediction markets is trade on events that are uncertain to occur with some probability, like the outcome of a sports match.

This functions by creating a free market, similar in structure to financial markets of assets, where people are allowed to trade contracts of events which pay out $1 if the event occurs or worthless if the event does not. The payout structure for a single contract of an event, represented as +, occuring or not occuring, represented as -, can be modelled with a payout function like below.

$$
f(contract_+) = \begin{cases}
 1 & \text{event +} \\
0 & \text{event -}
\end{cases}
$$

This is trivial given the description, but this also gives us an intuition for how the market belief of the likelihood of the event + taking place since we can see that buying and selling will intuitively reach an equilibrium when 

$$
\mathbb{E}_{implied}[contract_+] = 0 = (1)\cdot p_+ + (0)\cdot (1 - p_+) = p_+
$$

This creates a very intuitive framework for valuing these contracts and analyzing the effects of buying a contract without dealing with the non-linearities that were seen in the American odds when trying to interpret it mathematically. This also gives a 1 to 1 mapping between the value of a contract and the probability of its associated event taking place and an intuition for the market that these prediction markets facilitate. 

Suppose someone believes that there is an 80% chance of the Atlanta Hawks beating the Boston Celtics in a game and the Atlanta Hawks winning is trading at 75 cents. This individual can instantly and easily compute that a contract for the Atlanta Hawks winning is then worth 80 cents, and they can buy it for 75 cents. This presents presents an opportunity to make money by making 5 cents of believed edge in the game by buying the contract which is worth 80 cents for 75 cents. Conversely, the individual trading on their belief also moves the market to be more in accordance with their belief of the outcome of the game. Conversely, if the analyst believes that there is a 70% chance of the Hawks winning then they can also sell contracts for 75 cents to gain 5 cents of edge.

This aggregation of opinions allows for the emergence of the 'wisdom of the crowd' which is often seen to be a surprisingly accurate proxy for measuring uncertain values. The best example of this phenomena is competitions where people need to guess the number of jelly beans that are in a jar to win some prize. Statisticians regularly find that while individual guesses can have high variance and are usually very wrong, the average of the group's guesses end up being remarkably close to the true value.

From this example, we gain a better intuition for the value of computing the implied probability of any wager. When buying a contract or wager it is now intuitive that you want to see a smaller implied probability of the event ocurring to get yourself a better deal when you buy. Assuming we can only occupy the buying side of a contract in sports books we are now looking for instances that decrease the implied probability of the event ocurring and thus giving us a better deal and presenting edge.



### Describing bets for prediction markets

As a finance student, I have developed the intuition to fight against variance of any given financial position. To minimize variance, the strategy I will use will be to hedge all bets that I make in sports books with contrary positions in prediction markets. 

Consider I make any sports bet with +A odds for event '+', as opposed to event '-'. The mental model that I have is that you are paying presently for the payout structure with bet size B in the binary case with
$$
f^{+}_{sportsbook}(B) = \begin{cases}
 B\cdot(1 + \frac{A}{100}) & \text{if +} \\
0 & \text{if -}
\end{cases}
$$

,and I can hedge in a prediction market with traded odds of event '-' as $p_{-}$ as having the payout function
$$
g_{\text{prediction market}}^{-}(p_{-}\cdot B\cdot(1 + \frac{A}{100})) = \begin{cases}
0 & \text{if +} \\
B\cdot(1 + \frac{A}{100}) & \text{if -}
\end{cases}
$$
.
This setup allows us to guarantee a payout of $B + \frac{A}{100}\cdot B$ for a cost of $B + p_{-}\cdot B\cdot(1 + \frac{A}{100})$.
Because of a similar arbitrage argument you can expect generally that 
$$
B + p_{-}\cdot(B + \frac{A}{100}\cdot B) > B + \frac{A}{100}\cdot B
$$.

Because of technically advanced market makers like SIG taking a role in these prediction markets, we can generally assume there to be no arbitrage opportunities across markets since HFT/quant firms generally act to enforce market efficiency. Because of this, you can generally expect to buy covering sets of the future at at least a dollar and sell covering sets of the future at at most a dollar because these markets typically have some non-zero spread in them.

### When to Hedge

Because the profit incentive of sportsbook is to facilitate bets with an edge to the sportsbook, it is common for these sports books to try and entice players to begin gambling on their books using one time promotions that give up some edge in the expectation that repeated gambler will pay back the amount of edge that the sportsbook gives to entice their business. These deals are typically offered in 3 main types of promotions.
$$
\text{profit boosting} \\
\text{insurance} \\
\text{free bets}
$$

#### Bonus Bets

Many sports betting sites have enticing and simple sounding advertisments that claim "do this and claim several hundered dollars in bonus bets". These bonus bets are often denoted in some play currency with the sports book that have heavy restrictions applying to them, such as you cannot simply withdraw the bonus bets and close your account to get free money; you need to actually gamble with the bonus bets. We need to think a little harder to get the actual value out of the bonus bets.

Another significant restriction that applies when valuing bonus bets, is that wagers made using bonus bets do not pay back the value of the initial wager like what is normally assumed. So making a wager of $B bonus bucks with odds +A for event '+' we model the wager as having no cost so it is model like so.

$$
f^{+}_{bonus}(B) = \begin{cases}
 B\cdot(\frac{A}{100}) & \text{if +} \\
0 & \text{if -}
\end{cases}
$$

We can compute the expected value of this $B sized wager as 

$$
\mathbb{E}_{implied}[f^{+}_{bonus}(B)] = p_+\cdot B\cdot(\frac{A}{100}) \\ = \frac{100}{A+100}\cdot B\cdot(\frac{A}{100}) = \frac{A}{100 + A}\cdot B
$$

Intuitively A is in the range of positive numbers and without even needing to differentiate, upon inspection you can take the limit that as $A\rightarrow\infty$, $\mathbb{E}_{implied}[f^{+}_{bonus}(B)]\rightarrow B$ which is the upper bound for the expected value of a wager with bonus bucks. This result suggests that we get more value of bonus bucks with longer positions in the sportsbook.

Now consider hedging out a bonus bet to eliminate the variance of your position. Here we buy $B\cdot(\frac{A}{100})$ contracts in a prediction market against the position that we took out at an assumed cost of $p_-\cdot 100$ cents per contract. These contracts then give us the payout function

$$
g^-_{hedge}(p_-\cdot B\cdot(\frac{A}{100})) = \begin{cases}
 0 & \text{if +} \\
B\cdot(\frac{A}{100}) & \text{if -}
\end{cases}
$$

giving a combined payout 
$$
f^{+}_{bonus}(B) + g^-_{hedge}(p_-\cdot B\cdot(\frac{A}{100})) = B\cdot(\frac{A}{100}) = \begin{cases}
 B\cdot(\frac{A}{100}) & \text{if +} \\
B\cdot(\frac{A}{100}) & \text{if -}
\end{cases}
$$

at a cost of 
$$
p_-\cdot B\cdot(\frac{A}{100}) = \frac{A}{100}\cdot\frac{A}{100+A}\cdot B
$$
.

Thus the total value of our bonus bet when hedged with perfect efficiency is 
$$
B\cdot(\frac{A}{100}) - \frac{A}{100}\cdot\frac{A}{100+A}\cdot B = B\cdot\frac{A}{100}\cdot(1 - \frac{A}{100+A}) = B\cdot\frac{A}{100+A}
$$

In practice, I found that I can generally conver bonus bets using this strategy with a conversion rate of approximately 0.6 on average. This informs my hedging procedure with insured bets.

#### Insured bets



