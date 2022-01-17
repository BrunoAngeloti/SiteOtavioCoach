import moment from 'moment';

function diffDate(oldDate){
  return moment().diff(moment(oldDate), 'years');
}

export function returnDates(){
  const yearsLiving = diffDate([2012, 6])
  const yearsOld = diffDate([1968, 8, 4])
  const yearsMarried = diffDate([1994, 0, 8])
  const yearsKickboxing = diffDate([2013])

  return {
    yearsLiving,
    yearsOld,
    yearsMarried,
    yearsKickboxing
  }
}