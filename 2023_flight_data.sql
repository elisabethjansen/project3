DROP TABLE if EXISTS flight_data;

CREATE TABLE flight_data (
    flight_data_id SERIAL PRIMARY KEY,
    month INT,
    carrier_name VARCHAR(50),
    airport VARCHAR(5),
    city VARCHAR(50),
    total_arrivals FLOAT,
    total_delays_ct FLOAT,
    carrier_ct FLOAT,
    weather_ct FLOAT,
    nat_air_sys_ct FLOAT,
    security_ct FLOAT,
    late_aircraft_ct FLOAT,
    flight_cancelled FLOAT,
    flight_diverted FLOAT,
    total_delays_min FLOAT,
    carrier_delay_min FLOAT,
    weather_delay_min FLOAT,
    nat_air_sys_delay_min FLOAT,
    security_delay_min FLOAT,
    late_aircraft_delay_min FLOAT
);

SELECT * FROM flight_data