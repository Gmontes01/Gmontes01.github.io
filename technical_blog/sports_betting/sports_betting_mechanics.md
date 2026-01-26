# The Mechanics of Gambling

 *draft last edit 1/26/2026

 Sports books offer many events that can be bet on. Really anything in sports that can be quantified like an individual's scores, yards gained by an individual or team, position in an overall ranking, and of course the binary 'will this team/person win?' is something that sports books want to have people gambling on. 

 When gambling on an event you are given 'odds' which describe your potential winnings if your bet pays off and you always lose your initial bet is it does not. I will focus on American odds, which are most relevant to me, and maybe delve into European, Asian, and prediction market odds if I see their relevance. 

 ## American Odds

 Generally in American odds, negative odds or numbers indicate a favorite to win and positive odds indicate an underdog. This is advantageous for the sportsbook because the cognitive bias towards positive things pushes people to want to bet on more unlikely things which generally seem to benefit the sports book(think about how sportsbooks want all of their customers betting on highly unlikely parlays). 

 When gambling in America you will see a board that is similar to here. 
 
  ![alt text](image.png)
  
  Lets break down what it means so we can appropriately analyze the payouts and costs of the wagers. Look at the betting opportunities and don't worry about the 'Spread', 'Total', and 'Money' aspects but just notice that each option in this advertised matrix gives odds looking like '-110', '-10,000', and '+2,000'.

 Given some binary event $A$ we will notate the event that $A$ happens as $A^+$ and $A$ does not happen as $A^-$. We can say $A$ represents a fighter winning a fight, a team losing a football game, a basketball player scoring more than 7.5 three pointers, or someone streaking at the Super Bowl. These events will be given odds where a plus notates how much a gambler profits from a \$100 bet and negative notates how much is necessary for someone to bet to win \$100 if the bet pays off. An important feature of these odds too is that they are linear, so if you have a '+200' for \$150 then a win on that bet will get you \$300. 

 Simple enough, but this back and forth inversion doesn't work smoothly in the human brain and for analyzing probabilities of events so lets convert these odds to implied probabilities. Normally odds will always show the bigger number between the + and - odds. Suppose we have a bet that is -110 odds we can solve for the equivalent positive odds by considering the linearity of our bet payout.

$$110 \rightarrow 100$$

Here we can apply the linearity of these odds to get 

$$\frac{10}{11}\cdot 110 = 100\rightarrow \frac{10}{11}\cdot 100 \approx 91$$

 to have +91 equivalent odds. Here the negative odds have the bigger number so that is what is displayed in the sportsbook. 

  ### Converting Equivalent Odds 

 We can convert between positive and negative odds using the linearity property of bet payoffs. Given a bet has -X odds we can apply the same formula as before and multiply the bet and payoff by $\frac{100}{X}$
 
$$\frac{100}{X} \cdot X = 100 \rightarrow 100\cdot\frac{100}{X} = \frac{10,000}{X}$$

  to get the equivalent positive odds. Given this formula you can quickly convert -200, -250, -333, -500 odds give you +50, +40, +30, and +20 respectively. This also gets you a quick way to compare odds. This gives us the idea that -2X odds are half as good as -X odds. 

  We can also convert odds the other way by taking odds of +Y and multiplying by 

$$100\frac{100}{Y} = \frac{10,000}{Y}\rightarrow Y\frac{100}{Y} = 100$$

 so the mapping from one kind of odds to another is always dividing 10,000 by the odds.

Ultimately, the goal of converting these odds is to be able to make a better comparison between the odds so we can compare the positive odds to positive odds instead of having to consider positive odds to negative odds. 

###  Bets as Piecewise functions

To try and describe combining wagers lets define them as a payout function dependent on the state of the world in the future. Consider a game where team A plays against team B and one team must win and the other must lose. We will describe a +Y bet of size S on team A as a bet that has cost of S and a payout function of 

$$f_{\text{team A}}^{+Y}(S)=\begin{cases}
S\cdot(1 + \frac{Y}{100}) & \text{team A wins} \\
0 & \text{team A loses}
\end{cases}$$

and conversely if team A is playing against team B which has -X odds then for a bet of the size S for team B we will notate the bet as a payoff function

$$f_{\text{team B}}^{-X}(S)=\begin{cases}
0 & \text{team A wins} \\
S\cdot(1 + \frac{100}{X}) & \text{team A loses}
\end{cases}$$

with the same cost S.

### Extracting Implied Probabilities

Since I have spent more time studying probabilities than gambling, I try and think about how these odds translate into implied probabilities. To get implied probabilities we need to look at the profit function which we can notate as such 

$$\Pi_{\text{team A}}^{+Y}(S) = f_{\text{team A}}^{+Y}(S) - S = \begin{cases}
S\cdot(\frac{Y}{100}) & \text{team A wins} \\
-S & \text{team A loses}
\end{cases}$$

Assuming a zero expectation of each sports bet(which is a generous assumption) we derive the equation for implied probabilities for an underdog +Y bet being

$$\mathbb{E}[\Pi_{\text{team A}}^{+Y}(S)] = p_{\text{team A}} \cdot \frac{S}{100}\cdot ( Y) - (1-p_{\text{team A}})\cdot S = 0$$

implying 

$$p_{\text{team A}} \cdot (\frac{S}{100}\cdot Y + S) = S$$

giving 

$$p_{\text{team A}} = \frac{100}{100 + Y}$$

Both of these formulas should be intuitive since they give us the the equation

$$p_{\text{team A}} = \frac{\text{stake}}{\text{total payout}}$$

Since we are now only thinking in terms of positive bets we can convert the implied probability of a -X bet to get implied odds of the favorite side of the bet as

$$p_{\text{team B}} = \frac{100}{100 + \frac{10,000}{X}} = \frac{X}{X + 100} = \frac{\text{stake}}{\text{total payout}}$$

### American Odds and probabilities

We would expect the sportsbooks to take a percentage of edge in these bets thus making us expect that the actual expectations of each bet to be slightly below zero in reality. Consider making a bet with American odds +Y.

 Here I will notate $\pi_{\text{team A}}$ to notate the actually probability of team A winning and $p_{\text{team A}}$ as the implied odds of the bet for team A. Thus we see

$$\mathbb{E}_{reality}[\Pi_{\text{team A}}^{+Y}(S)] = \pi_{\text{team A}} \cdot \frac{S}{100}\cdot Y - (1-\pi_{\text{team A}})\cdot S < 0 = p_{\text{team A}} \cdot \frac{S}{100}\cdot Y - (1-p_{\text{team A}})\cdot S$$

and similarly

$$\mathbb{E}_{reality}[\Pi_{\text{team B}}^{-X}(S)] = \pi_{\text{team B}} \cdot \frac{100}{X}\cdot S - (1-\pi_{\text{team B}})\cdot S < 0 = p_{\text{team B}} \cdot \frac{10,000}{X} - (1-p_{\text{team B}})\cdot S$$

Since the expected value of a bet is obviously monotonic with respect to the implied probability we can conclude that

$$\pi_{\text{team A}} < p_{\text{team A}} \\
\pi_{\text{team B}} < p_{\text{team B}} \\ 
1 - \pi_{\text{team B}} = \pi_{\text{team A}} > 1 - p_{\text{team B}}$$

letting us find the bounds for the sportsbook's actual expected probability of the event taking place as

$$1 - p_{\text{team B}} < \pi_{\text{team A}} < p_{\text{team A}}$$

Ultimately this behavior makes it so that we expect to always overpay for the likelihood of our event occuring.

## Prediction Markets

Prediction markets like Kalshi and Polymarket are making waves in the finance and gaming space after being legalized nationally. Do not be confused by the language and slightly distinct mechanics, this is also gambling. 

### How Prediction Markets Work(and why this is relevant)

When looking at my arbitrage strategy I found that the tightest markets for me to hedge my bets was on prediction markets. The way these markets work is that you are able to buy contracts for events which pay out one unit(dollar) upon the event taking place. This event can be Jerome Powell saying a specific word during FOMC, a team winning a sports bet, or China invading Taiwan by a specific date.

These markets work by allowing individuals to buy and sell these events at a specific price normally <1. These markets are lower cost to participate in, most likely because the main mechanism of these markets is not to extract edge out of its users like sportsbooks but to provide data representing public sentiment on the likelihood of an event occurring thus giving the best proxy for the likelihood of said event occuring. This works by using idea of wisdom of the crowd giving trustworthy public opinion on these events.

Given a mathematical inclination to approach these topics, it is relieving to see that prediction markets work by trading contracts of an event which resolve to a value of 1 if the event takes place and 0 if the event does not take place. The mechanics for guaranteeing fairness and trust in these evaluations of events are another interesting topic more related to crypto, so I will likely save that for another technical blog post.

Of course, if the event is certain to occur or not then there is no reason to trade, but the role of prediction markets is trade on events that are uncertain to occur with some probability, like the outcome of a sports match.

This functions by creating a free market, similar in structure to financial markets of assets, where people are allowed to trade contracts of events which pay out \$1 if the event occurs or worthless if the event does not. Here is the payout structure for a single contract for an event A taking place.

$$g(contract_A) = \begin{cases}
 1 & \text{event }A \\
0 & \text{event }A^c
\end{cases}$$

This may be trivial given the description, but this also gives us an intuition for how the market belief of the likelihood of the event + taking place since we can see that buying and selling will intuitively reach an equilibrium when the market does not believe the current price is worth buying above the price or selling below the current price then the expected value of a contract has an implied exprected value of 0, giving

$$\mathbb{E}_{implied}[contract_A] = 0 = (1)\cdot p_A + (0)\cdot (1 - p_A) = p_A$$

### Describing bets for prediction markets

As a finance student, I have developed the intuition to fight against variance of any given financial position. To minimize variance, the strategy I will use prediction markets to hedge all bets that I make in sports books with contrary positions in prediction markets. 

We can model a position in a prediction market for the outcome A with C contracts as the function below

$$g_{A}(C) = \begin{cases}
 C & \text{if }A \\
0 & \text{if }A^c
\end{cases}$$

having a cost of $p_{+}\cdot C$ and for the same size with B contracts we have a payout function 

$$g_{A^c}(C) = \begin{cases}
 0 & \text{if }A \\
C & \text{if }A^c
\end{cases}$$

at a cost of $p_{-}\cdot C$. Notice that to prevent arbitrage 

$$p_+ + p_- \geq 1$$

Because of technically advanced market makers like SIG taking a role in these prediction markets, we can generally assume there to be no arbitrage opportunities across markets since HFT/quant firms generally act to enforce market efficiency. Because of this, you can generally expect to buy covering sets of the future at at least a dollar and sell covering sets of the future at at most a dollar because these markets typically have some non-zero spread in them.

### When to Hedge

Because the profit incentive of sportsbook is to facilitate bets with an edge to the sportsbook, it is common for these sports books to try and entice players to begin gambling on their books using one time promotions that give up some edge in the expectation that repeated gambler will pay back the amount of edge that the sportsbook gives to entice their business. These deals are typically offered in 3 main types of promotions.

$$\text{profit boosting} \\
\text{insurance} \\
\text{free bets}$$

#### Bonus Bets

Many sports betting sites have enticing and simple sounding advertisments that claim "do this and claim several hundered dollars in bonus bets". These bonus bets are often denoted in some play currency with the sports book that have heavy restrictions applying to them, such as you cannot simply withdraw the bonus bets and close your account to get free money; you need to actually gamble with the bonus bets. We need to think a little harder to get the actual value out of the bonus bets.

Another significant restriction that applies when valuing bonus bets, is that wagers made using bonus bets do not pay back the value of the initial wager like what is normally assumed. So making a wager of \$S bonus bucks with odds +Y for event A we model the wager as having no cost so it is model like so.

$$h^{+Y}_{A}(S) = \begin{cases}
 S\cdot(\frac{Y}{100}) & \text{if }A \\
0 & \text{if }A^c
\end{cases}$$

We can compute the expected value of this \$B sized wager by computing the expectation of its profit as

$$\mathbb{E}[\Pi^{+}_{bonus}(S)] = p_+\cdot S\cdot(\frac{A}{100}) = \frac{100}{A+100}\cdot S\cdot(\frac{A}{100}) = \frac{A}{100 + A}\cdot S$$

Intuitively A is in the range of positive numbers and without even needing to differentiate, upon inspection you can take the limit that as $A\rightarrow\infty$, $\mathbb{E}[\Pi^{+}_{bonus}(S)]\rightarrow S$ which is the upper bound for the expected value of a wager with bonus bucks. This result suggests that we get more value of bonus bucks with longer positions in the sportsbook.

Now consider hedging out a bonus bet to eliminate the variance of your position. Here we buy $S\cdot(\frac{A}{100})$ contracts in a prediction market against the position that we took out at an assumed cost of $p_-\cdot 100$ cents per contract. These contracts then give us the payout function

$$g_{A^c}(S\cdot(\frac{A}{100})) = \begin{cases}
 0 & \text{if +} \\
S\cdot(\frac{A}{100}) & \text{if -}
\end{cases}$$

giving a combined payout 

$$h^{+Y}_{A}(S) + g_{A^c}(S\cdot(\frac{A}{100})) = S\cdot(\frac{A}{100}) = \begin{cases}
 S\cdot(\frac{A}{100}) & \text{if +} \\
S\cdot(\frac{A}{100}) & \text{if -}
\end{cases}$$

at a cost of 

$$p_{A^c}\cdot S\cdot(\frac{A}{100}) = \frac{A}{100+A}\cdot S\cdot\frac{A}{100}$$

Thus the total value of our bonus bet when hedged with perfect efficiency is 

$$S\cdot(\frac{A}{100}) - \frac{A}{100}\cdot\frac{A}{100+A}\cdot S = S\cdot\frac{A}{100}\cdot(1 - \frac{A}{100+A}) = S\cdot\frac{A}{100+A}$$

In practice, I found that I can generally convert bonus bets using this strategy with a conversion rate of approximately 0.6 on average. This informs my hedging procedure with insured bets. Even when I use extremely long odds in my wager like +1000, I would expect to get about $\frac{1000}{1100}\approx 0.91$ conversion. 

#### Insured bets

When a bet is insured it does not reimburse your cash or withdrawable balance in your account with a sportsbook, rather insured bets give you back the value of your bet in bonus bets. From the last derivation, bonus bets are strictly worth less than the value denoted on the bonus bet. From my empirical experience, a bonus bet when properly hedged to guarantee a given payout only is worth 60% of the value of the bonus bet. 

This is dissapointing to think about how insurance is not nearly as valuable as we initially would think, but it is necessary to be pragmatic when approaching these instances where we may be throwing thousands of dollars into a position where we want to be confident in our position. 

So how do we value an insured bet? 

Typically an insured bet is given some maximum amount of the bet which will be insured. Since insured bets' value scale linearly with the position, then any insured bet's value is either less than 0 in which case we do nothing or its value is >0 in which case we will want to get as much of that bet as possible. From this rational we will want to max out the insurance that we get in a bet and we will not want to wager a single dollar which is uninsured assuming that typical wagers on sportsbooks are negative expected value.

Since I am not looking to risk my money, I will value an insured bet purely in its ability to be hedged and provide risk free profit. Notice that an insured bet then has a payout function with odds +Y for event A with S dollars wagered as 

$$h^{+Y}_{A}(S) = \begin{cases}
S\cdot(1 + \frac{Y}{100})  & \text{if }A \\
0.6 \cdot S & \text{if }A^c
\end{cases}$$

The insurance supports our position by only requiring us to hedge in a prediction market $S\cdot(0.4 + \frac{Y}{100})$ contracts against our insured bet so that we get an outcome neutral position with payout

$$h^{+Y}_{A}(S) + g_{A^c}(S\cdot(0.4 + \frac{Y}{100})) = \begin{cases}
S\cdot(1 + \frac{Y}{100}) + 0 & \text{if }A \\
0.6 \cdot S + S\cdot(0.4 + \frac{Y}{100}) & \text{if }A^c
\end{cases} = S\cdot(1 + \frac{Y}{100})$$

to guarantee a payout of $S\cdot(1 + \frac{Y}{100})$ for a cost of 

$$S + p_{A^c}\cdot S\cdot(0.4 + \frac{Y}{100}) = S + \frac{Y}{Y + 100}\cdot S\cdot(0.4 + \frac{Y}{100}) = S\cdot (1 + \frac{Y}{Y + 100}\cdot(0.4 + \frac{Y}{100}) )$$

Where we will have a profit of 

$$\Pi = S\cdot(1 + \frac{Y}{100}) - S\cdot (1 + \frac{Y}{Y + 100}\cdot(0.4 + \frac{Y}{100}) ) \\ 
= S\cdot (\frac{Y}{100} - 0.4\frac{Y}{Y + 100} - \frac{Y}{Y + 100}\frac{Y}{100}) \\ 
= S\cdot(\frac{100}{Y+100}\frac{Y}{100} - 0.4\frac{Y}{Y+100}) \\ 
= S\cdot (\frac{Y}{Y+100} - 0.4\frac{Y}{Y+100}) \\ 
= 0.6\cdot S\cdot\frac{Y}{Y+100}$$

 This equation also gives us the value that in a perfectly frictionless market then a dollar of a hedged insured bet is valued as 0.6 of a bonus bet. This intuitively makes sense because we can imagine the insurance as giving a free bonus bet for the 60% of the bet that is actually insured by the value of the returned bonus bets and net 0 for the other 0.4 percent. This is optimistic assuming that uninsured bets factor to have a net 0 value instead of the actual negative EV that we have, but it allows us to build this workable model. 

From this interpretation we can model an insured bet of size S as being worth $0.6\cdot S$ bonus bets minus the cost of making and hedging 0.4 normal bets. We model a bonus bet as worth 0.6 dollars to bonus bet dollars and on average a hedged normal bet has an expected pnl of -10% of the wager. So from this model we have the rough approximation that an insured bet is worth about 

$$\Pi \approx 0.6\cdot(0.6\cdot S) - 0.1 \cdot 0.4 \cdot S = (0.36 - 0.04) \cdot S = 0.32\cdot S$$

which is much less than what you would expect upon first glance and from what the promotios would want you to think. This is still useful in gauging the utility of say \$100 in bonus bets against \$150 in bet insurance where you can expect the bonus bets to be worth about \$60 and the \$150 bet insurance to end up being worth about \$50 making the bonus bets a better deal.

 #### Profit boost

 Now we consider the final and most common promotion. This is the profit boost which we will run through the same hedging scheme to analyze its value for a risk free bettor like myself. 

 A profit boost functions to increase the profit of a wager by a given percent. Notice that the description increases the profit upon winning and not the total revenue which includes the original stake. Normally the terms of a profit boost is to boost the profits of a wager up to a maximum value of the initial wager. Assuming the profit boost is positive EV for us then the optimal strategy is to use the maximum amount of the bet and hedge away any variance due to me not knowing ball. 

 Suppose there is a boost of k% with a maximum bet size of $S_{\text{max}}$. We will describe the original bet as having +Y odds and the profit boost gives us boosted odds of $+Y(1+\frac{k}{100})$ odds. So our boosted bet has a cost of $S_{max}$, a win condition of A, and a payout of 

$$h^{+Y(1+\frac{k}{100})}_{A}(S_{max}) = \begin{cases}
S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))  & \text{if }A \\
0 & \text{if }A^c
\end{cases}$$

which we can hedge with a number of contracts that we would win if the bet pays out. 

$$h^{+Y(1+\frac{k}{100})}_{A}(S_{max}) + g_{A^c}(S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))) = S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))$$

at a cost of 

$$S_{max} + p_{A^c}\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))$$

giving a profit of 

$$S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) - (S_{max} + p_{A^c}\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))) \\ 
= S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) - (S_{max} + (1 - p_A)\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))) \\ 
= S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) - S_{max}\cdot(1 + (1 + \frac{Y}{100}(1+\frac{k}{100}))) + p_A\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) \\ 
=p_A\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) - S_{max} \\ 
 = S_{max} ( p_A \cdot(\frac{Y}{100}(1+\frac{k}{100})) - (p_{A^c})) \\ 
 = S_{max} ( \frac{100}{Y+100} \cdot(\frac{Y}{100}(1+\frac{k}{100})) - (\frac{Y}{Y+100})) \\ 
= S_{max}\cdot \frac{Y}{100+Y}\frac{k}{100} \\ 
= S_{max}\cdot p_{A^c}\cdot\frac{k}{100}$$

Again this implies that we should take the longest odds possible when given some promo in the sports books and this reasonably gives us an upper bound of a profit boost of k% with a max bet size of $S_{max}$ as $\frac{k}{100}S_{max}$. This hedging computation assums a perfectly efficient market which is does not take place. Another way to think about the profit boost is that it grants a bonus bet of size $\frac{k}{100}S_{max}$ when a normal bet of size $S_{max}$ is made. Since we value a normal bet as loosing 10% of the wagered value, we can value a profit boost's profit as

$$\Pi \approx -0.1\cdot S_{max} + \frac{k}{100}\cdot 0.6\cdot S_{max} = S_{max}(\frac{6k-100}{1000})$$

From this formula we can actually see that the value of some profit boosts is still not worth it for hedging purposes when $6k-100 < 0$. This tells us that it is about zero expected value to try and hedge arb out of a 20% profit boost.