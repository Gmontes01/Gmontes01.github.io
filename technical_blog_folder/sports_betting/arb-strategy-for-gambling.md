# Arbitrage trading sports books

Given you have read about the mechanics of gambling, we can now talk about a simple strategy for arbitraging positive EV bets. 

### When to Hedge

Because the profit incentive of sportsbook is to facilitate bets with an edge to the sportsbook, it is common for these sports books to try and entice players to begin gambling on their books using one time promotions that give up some edge in the expectation that repeated gambler will pay back the amount of edge that the sportsbook gives to entice their business. These deals are typically offered in 3 main types of promotions.

$$
\begin{gathered}
\text{profit boosting} \\
\text{insurance} \\
\text{free bets}
\end{gathered}
$$

#### Bonus Bets

Many sports betting sites have enticing and simple sounding advertisments that claim "do this and claim several hundered dollars in bonus bets". These bonus bets are often denoted in some play currency with the sports book that have heavy restrictions applying to them, such as you cannot simply withdraw the bonus bets and close your account to get free money; you need to actually gamble with the bonus bets. We need to think a little harder to get the actual value out of the bonus bets.

Another significant restriction that applies when valuing bonus bets, is that wagers made using bonus bets do not pay back the value of the initial wager like what is normally assumed. So making a wager of $S$ bonus bucks with odds +Y for event A we model the wager as having no cost so it is model like so.

$$h^{+Y}_{A}(S) = \begin{cases} S\cdot(\frac{Y}{100}) & \text{if }A \\ 0 & \text{if }A^c \end{cases}$$

We can compute the expected value of this $S$-sized wager by computing the expectation of its profit as

$$\mathbb{E}[\Pi^{+}_{bonus}(S)] = p_A\cdot S\cdot(\frac{Y}{100}) = \frac{100}{Y+100}\cdot S\cdot(\frac{Y}{100}) = \frac{Y}{100 + Y}\cdot S$$

Intuitively Y is in the range of positive numbers and without even needing to differentiate, upon inspection you can take the limit that as $Y\rightarrow\infty$, $\mathbb{E}[\Pi^{+}_{bonus}(S)]\rightarrow S$ which is the upper bound for the expected value of a wager with bonus bucks. This result suggests that we get more value of bonus bucks with longer positions in the sportsbook.

Now consider hedging out a bonus bet to eliminate the variance of your position. Here we buy $S\cdot(\frac{Y}{100})$ contracts in a prediction market against the position that we took out at an assumed cost of $p_{A^c}$ dollars per contract. These contracts then give us the payout function

$$g_{A^c}(S\cdot(\frac{Y}{100})) = \begin{cases} 0 & \text{if }A \\ S\cdot(\frac{Y}{100}) & \text{if }A^c \end{cases}$$

giving a combined payout 

$$h^{+Y}_{A}(S) + g_{A^c}(S\cdot(\frac{Y}{100})) = S\cdot(\frac{Y}{100}) = \begin{cases} S\cdot(\frac{Y}{100}) & \text{if }A \\ S\cdot(\frac{Y}{100}) & \text{if }A^c \end{cases}$$

at a cost of 

$$p_{A^c}\cdot S\cdot(\frac{Y}{100}) = \frac{Y}{100+Y}\cdot S\cdot\frac{Y}{100}$$

Thus the total value of our bonus bet when hedged with perfect efficiency is 

$$\begin{aligned}
S\cdot(\frac{Y}{100}) - \frac{Y}{100}\cdot\frac{Y}{100+Y}\cdot S &= S\cdot\frac{Y}{100}\cdot(1 - \frac{Y}{100+Y}) \\
&= S\cdot\frac{Y}{100+Y}
\end{aligned}$$

In practice, I found that I can generally convert bonus bets using this strategy with a conversion rate of approximately 0.6 on average. This informs my hedging procedure with insured bets. Even when I use extremely long odds in my wager like +1000, I would expect to get about $\frac{1000}{1100}\approx 0.91$ conversion. 

#### Insured bets

When a bet is insured it does not reimburse your cash or withdrawable balance in your account with a sportsbook, rather insured bets give you back the value of your bet in bonus bets. From the last derivation, bonus bets are strictly worth less than the value denoted on the bonus bet. From my empirical experience, a bonus bet when properly hedged to guarantee a given payout only is worth 60% of the value of the bonus bet. 

This is dissapointing to think about how insurance is not nearly as valuable as we initially would think, but it is necessary to be pragmatic when approaching these instances where we may be throwing thousands of dollars into a position where we want to be confident in our position. 

So how do we value an insured bet? 

Typically an insured bet is given some maximum amount of the bet which will be insured. Since insured bets' value scale linearly with the position, then any insured bet's value is either less than 0 in which case we do nothing or its value is >0 in which case we will want to get as much of that bet as possible. From this rational we will want to max out the insurance that we get in a bet and we will not want to wager a single dollar which is uninsured assuming that typical wagers on sportsbooks are negative expected value.

Since I am not looking to risk my money, I will value an insured bet purely in its ability to be hedged and provide risk free profit. Notice that an insured bet then has a payout function with odds +Y for event A with S dollars wagered as 

$$h^{+Y}_{A}(S) = \begin{cases} S\cdot(1 + \frac{Y}{100}) & \text{if }A \\ 0.6 \cdot S & \text{if }A^c \end{cases}$$

The insurance supports our position by only requiring us to hedge in a prediction market $S\cdot(0.4 + \frac{Y}{100})$ contracts against our insured bet so that we get an outcome neutral position with payout

$$\begin{aligned}
h^{+Y}_{A}(S) + g_{A^c}(S\cdot(0.4 + \frac{Y}{100})) &= \begin{cases} S\cdot(1 + \frac{Y}{100}) + 0 & \text{if }A \\ 0.6 \cdot S + S\cdot(0.4 + \frac{Y}{100}) & \text{if }A^c \end{cases} \\
&= S\cdot(1 + \frac{Y}{100})
\end{aligned}$$

to guarantee a payout of $S\cdot(1 + \frac{Y}{100})$ for a cost of 

$$S + p_{A^c}\cdot S\cdot(0.4 + \frac{Y}{100}) = S + \frac{Y}{Y + 100}\cdot S\cdot(0.4 + \frac{Y}{100}) = S\cdot (1 + \frac{Y}{Y + 100}\cdot(0.4 + \frac{Y}{100}) )$$

Where we will have a profit of 

$$\begin{aligned}
\Pi &= S\cdot(1 + \frac{Y}{100}) - S\cdot (1 + \frac{Y}{Y + 100}\cdot(0.4 + \frac{Y}{100}) ) \\
&= S\cdot (\frac{Y}{100} - 0.4\frac{Y}{Y + 100} - \frac{Y}{Y + 100}\frac{Y}{100}) \\
&= S\cdot(\frac{100}{Y+100}\frac{Y}{100} - 0.4\frac{Y}{Y+100}) \\
&= S\cdot (\frac{Y}{Y+100} - 0.4\frac{Y}{Y+100}) \\
&= 0.6\cdot S\cdot\frac{Y}{Y+100}
\end{aligned}$$

This equation also gives us the value that in a perfectly frictionless market then a dollar of a hedged insured bet is valued as 0.6 of a bonus bet. This intuitively makes sense because we can imagine the insurance as giving a free bonus bet for the 60% of the bet that is actually insured by the value of the returned bonus bets and net 0 for the other 0.4. This is optimistic assuming that uninsured bets factor to have a net 0 value instead of the actual negative EV that we have, but it allows us to build this workable model. 

From this interpretation we can model an insured bet of size S as being worth $0.6\cdot S$ bonus bets minus the cost of making and hedging 0.4 normal bets. We model a bonus bet as worth 0.6 dollars to bonus bet dollars and on average a hedged normal bet has an expected pnl of -10% of the wager. So from this model we have the rough approximation that an insured bet is worth about 

$$\Pi \approx 0.6\cdot(0.6\cdot S) - 0.1 \cdot 0.4 \cdot S = (0.36 - 0.04) \cdot S = 0.32\cdot S$$

which is much less than what you would expect upon first glance and from what the promotios would want you to think. This is still useful in gauging the utility of say \$100 in bonus bets against \$150 in bet insurance where you can expect the bonus bets to be worth about \$60 and the \$150 bet insurance to end up being worth about \$50 making the bonus bets a better deal.

#### Profit boost

Now we consider the final and most common promotion. This is the profit boost which we will run through the same hedging scheme to analyze its value for a risk free bettor like myself. 

A profit boost functions to increase the profit of a wager by a given percent. Notice that the description increases the profit upon winning and not the total revenue which includes the original stake. Normally the terms of a profit boost is to boost the profits of a wager up to a maximum value of the initial wager. Assuming the profit boost is positive EV for us then the optimal strategy is to use the maximum amount of the bet and hedge away any variance due to me not knowing ball. 

Suppose there is a boost of k% with a maximum bet size of $S_{\text{max}}$. We will describe the original bet as having +Y odds and the profit boost gives us boosted odds of $+Y(1+\frac{k}{100})$ odds. So our boosted bet has a cost of $S_{max}$, a win condition of A, and a payout of 

$$h^{+Y(1+\frac{k}{100})}_{A}(S_{max}) = \begin{cases} S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) & \text{if }A \\ 0 & \text{if }A^c \end{cases}$$

which we can hedge with a number of contracts that we would win if the bet pays out. 

$$h^{+Y(1+\frac{k}{100})}_{A}(S_{max}) + g_{A^c}(S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))) = S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))$$

at a cost of 

$$S_{max} + p_{A^c}\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))$$

giving a profit of 

$$\begin{aligned}
\Pi &= S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) - (S_{max} + p_{A^c}\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100}))) \\
&= p_A\cdot S_{max}\cdot(1 + \frac{Y}{100}(1+\frac{k}{100})) - S_{max} \\
&= S_{max} ( p_A \cdot(\frac{Y}{100}(1+\frac{k}{100})) - (p_{A^c})) \\
&= S_{max} ( \frac{100}{Y+100} \cdot(\frac{Y}{100}(1+\frac{k}{100})) - (\frac{Y}{Y+100})) \\
&= S_{max}\cdot \frac{Y}{100+Y}\frac{k}{100} \\
&= S_{max}\cdot p_{A^c}\cdot\frac{k}{100}
\end{aligned}$$

Again this implies that we should take the longest odds possible when given some promo in the sports books and this reasonably gives us an upper bound of a profit boost of k% with a max bet size of $S_{max}$ as $\frac{k}{100}S_{max}$. This hedging computation assums a perfectly efficient market which is does not take place. Another way to think about the profit boost is that it grants a bonus bet of size $\frac{k}{100}S_{max}$ when a normal bet of size $S_{max}$ is made. Since we value a normal bet as loosing 10% of the wagered value, we can value a profit boost's profit as

$$\Pi \approx -0.1\cdot S_{max} + \frac{k}{100}\cdot 0.6\cdot S_{max} = S_{max}(\frac{6k-100}{1000})$$

From this formula we can actually see that the value of some profit boosts is still not worth it for hedging purposes when $6k-100 < 0$. This tells us that it is about zero expected value to try and hedge arb out of a profit boost below about 17%, and a 20% boost is only slightly positive.
