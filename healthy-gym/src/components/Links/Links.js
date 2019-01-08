import React from 'react';


function Link(props) {

  return (
    <a href={props.href} className={props.className} target={props.target}>
      {props.children}
    </a>
  )
}

Link.defaultProps = {
  target: "_blank"
}


export function TwitterLink(props) {

  let link = "https://twitter.com/healthy__app"
  return (
    <Link href={link} className={props.className}>
      {props.children}
    </Link>
  )
}


export function FacebookLink(props) {
  let link = "https://www.facebook.com/Healthy-App-287577978779609/"
  return (
    <Link href={link} className={props.className}>
      {props.children}
    </Link>
  )
}

export function MediumLink(props) {
  let link = "https://medium.com/orycion"
  return (
    <Link href={link} className={props.className}>
      {props.children}
    </Link>
  )
}