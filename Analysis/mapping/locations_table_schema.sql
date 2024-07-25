drop table if exists locations

create table locations(
	airport varchar (10) not null,
	latitude float not null,
	longitude float not null
)
