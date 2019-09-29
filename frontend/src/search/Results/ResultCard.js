import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
  card: {
	width: "90%",
	minWidth: "90%",
	margin: "1em",
  },
  button: {
	  margin: '10px'
  },
  emailButton: {
    textTransform: "none"
  },
  icon: {
    marginRight: '5px'
  }
}));

export default function ResultCard(props) {
  const classes = useStyles();
  const {title, addressline, phone, email, website, eligibility, description} = props;

  /* https://stackoverflow.com/a/8358141 */
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    return null
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
			// call to action button
			<Button variant="contained" color="primary" className={classes.button} onClick={() => {window.open(website)}}>
				<Typography>Learn More</Typography>
				{/* This Button uses a Font Icon, see the installation instructions in the docs. */}
				<OpenInNewIcon>send</OpenInNewIcon>
			</Button>
        }
		title = {title}
		titleTypographyProps = {{align: 'left'}}
		subheader = {addressline}
		subheaderTypographyProps = {{align: 'left'}}
      />
      <CardContent>
        {eligibility &&
        <Typography variant="body2" color="textPrimary" component="p" gutterBottom="0.2em" align= "left">
          <b>Eligibility:</b> {eligibility}
        </Typography>}
        <Typography variant="body2" color="textSecondary" component="p" align= "left">
			{description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {phone && 
        <Button aria-label="phone" onClick={() => {window.open("tel:+1" + phone)}}>
            <PhoneIcon className={classes.icon} /> {formatPhoneNumber(phone)}
        </Button>
      }
      {email && 
        <Button aria-label="email" className={classes.emailButton} onClick={() => {window.open("mailto:" + email)}}>
            <EmailIcon className={classes.icon} /> {email}
        </Button>
      }
      </CardActions>
    </Card>
  );
}
