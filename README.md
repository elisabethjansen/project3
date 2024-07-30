# project3

Following the requirements of the Data Engineering Track our group utilized flight delay data from the Bureau of Transportation. We aimed to explore the following questions: 

Which airline carrier has the most delays due to security issues?
What month is associated with the most weather delays?
Hypothesis: There are more delays associated with weather in Seattle than in Austin.
Rank the seasons in terms of highest to lowest delays. 
Rank airports with highest to lowest delays (and based on weather, late crew, security, etc).
Rank airlines with highest to lowest delays.
Identify the top 5 airlines with delays and do further in depth analysis to elicit relationships or correlations between data points (e.g. average time delay vs number of delays).
Of the top 5 airlines with the most delays, what is the range and average time of delay?
Of the top 5 airlines with the longest delays, what is the range in frequency of delays (how many)?


## Database Design and Set Up

To replicate the database used to carry out analysis please use the following:
 
 1. Using pgAdmin to access PostreSQL create a new database and use the provided schema found in the Resources folder to create the tables. 
 2. The first table is called "flight_data", to this table import the csv file "2023_data_cleaned.csv" from the Resources folder
 3. The second table is callled "location", to this table import the csv file "clean_plots.csv" from the Resources folder
 4. Install psycopg2 via the command line using "pip install psycopg2"
 
## Analysis
### See the Analysis folder to run the following Jupyter Notebooks: 

1. Data_exploration_Brittany_T.ipynb -- This analysis explores the patterns and correlations between total delay counts and total delay in minutes.
2. seasonRegion.ipynb -- This analysis explores delay frequency by region and season in terms of total delays and delays due to weather. 
3. shannon_notebook.ipynb -- This analysis explores delays by both carrier and airport looking at all collected delay reasons. 

Visualizations created within the above analyses were utilized for group presentation (Group1_Project3.pdf) drawing the following conculsions: 

Top 5 Analysis: Identifying the airlines with the highest number of delays by count is interesting, but not useful. In most “Top 5” analyses, the 5 airlines that had the most routes also had the most delays. The outliers are the interesting data points (e.g. Spirit Airlines ranks #1 in number of security delays but #9 in number of routes). A review by percentage would yield more useful information.


Regional & Seasonal Analysis: the regional delays due to weather for all analyzed regions was less than 1%. While the southwest region showed over 20% of all flights were delayed, roughly only .8% of those are attributed to weather. Summer showed to be the season with the highest total delays and delays due to weather with July being the month with the highest total delays.


Frequency vs Duration of Delays: There is a positive correlation between frequency (in #) of delays and total minutes delayed for a given airline, airport and month. This makes sense as more delays contribute to a longer total delay time. When graphing the distribution of frequency as the % of total flights delayed vs duration, there is a somewhat random distribution. This provides evidence against the hypothesis that airlines may be willing to endure more frequent delays if delays are shorter in duration and airlines with fewer delays may have longer delays. Lastly, when plotting % of flights delayed out of total flights against average duration of delay per flight this revealed specific airlines who perform poorly and well in both categories. This may be helpful to travelers in choosing high risk vs low risk or based on the variable they are more willing to accommodate.


## Ethical considerations

1. The data used for this project was not collected directly or indirectly from people, nor was it data that describes a population(s) of people. Therefore, considerations pertaining to human subjects research and analysis do not apply, nor do privacy issues. 
2. The data is publicly available, therefore ownership of the data is not an issue.
3. Machine-learning algorithms were not used for analysis nor were they used to train a dataset used in the analysis, to the best of our knowledge. Data is collected in real time on a monthly basis and published for public use/review. Therefore the potential for introducing bias through the use of biased algorithms within this data analysis are thought to be low. However, there is a possibility that bias could exist within the data set based on ascertainment bias (e.g. certain airports are not submitting data or do not have a robust data capture system) or other forms of bias we are not aware of.

## Resources

https://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp?20=E; "Bureau of Transportation Statistics"

https://github.com/ip2location/ip2location-iata-icao/blob/master/iata-icao.csv

StackOverflow

Harvard Business School Online: 5 Principles of Data Ethics for Business Professionals (https://online.hbs.edu/blog/post/data-ethics) 

Documentation for alternative set ups and usage of psycopg2 can be found at https://www.psycopg.org/docs/index.html 
