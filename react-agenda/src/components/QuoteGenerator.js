import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Quote = () => {
  const [quote, setQuote] = useState('');
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const fetchQuote = async () => {
    const data = await fetch('https://api.quotable.io/random');
    const jsonData = await data.json();
    console.log(jsonData);
    setQuote(`${jsonData.content} - ${jsonData.author}`);
  };

  useEffect(() => {
    setInterval(fetchQuote, 10000);
  }, []);

  return (
    <Card className={classes.root} variant="outlined" container>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Motivational Quotes To Help You Stay Focused
        </Typography>
        <Typography variant="body2" component="p">
          {quote}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Quote;
