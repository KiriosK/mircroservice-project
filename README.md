## Instructions

Check this [link](http://localhost:80) to see the frontend part

To allow mircroservices connect successfully

### Run waitforrabbit service

I used this service, because alpine doesn't support bash commands.
So, I couldn't use wait-for-it

```
docker-compose run --rm waitforrabbit
```

### Docker-compose

```
docker-compose up --build server db redis top_calculator db_writer frontend
```
