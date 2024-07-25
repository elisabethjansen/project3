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
 2. The first table is called "flight_data", to this table import the csv file "2023_flight_data_cleaned.csv" from the Resources folder
 3. The second table is callled "location", to this table import the csv file "clean_plots.csv" from the Resources folder
 4. Install psycopg2 via the command line using "pip install psycopg2"
 5. Database can be connected via psycopg2 and SQLalchemy. See database connection and analysis examples in the jupyter notebook files within the Analysis folder.

 ## Ethical considerations

1. The data used for this project was not collected directly or indirectly from people, nor was it data that describes a population(s) of people. Therefore, considerations pertaining to human subjects research and analysis do not apply, nor do privacy issues. 
2. The data is publicly available, therefore ownership of the data is not an issue.
3. Machine-learning algorithms were not used for analysis nor were they used to train a dataset used in the analysis, to the best of our knowledge. Data is collected in real time on a monthly basis and published for public use/review. Therefore the potential for introducing bias through the use of biased algorithms within this data analysis are thought to be low. However, there is a possibility that bias could exist within the data set based on ascertainment bias (e.g. certain airports are not submitting data or do not have a robust data capture system) or other forms of bias we are not aware of.

## Resources

https://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp?20=E; "Bureau of Transportation Statistics"
https://github.com/ip2location/ip2location-iata-icao/blob/master/iata-icao.csv
StackOverflow
Harvard Business School Online: 5 Principles of Data Ethics for Business Professionals (https://online.hbs.edu/blog/post/data-ethics) 
