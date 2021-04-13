import React, { useEffect } from "react";
import classes from "./ErrorBar.module.scss"

type ErrorBarType = {
  handleError: (value: string | null) => void
  errorMessage: string
}

export const ErrorBar: React.FC<ErrorBarType> = ({ errorMessage, handleError }) => {

  const onCloseClickHandler = () => {
    handleError(null);
  }

  useEffect(() => {
    setTimeout(() => {
      handleError(null);
    }, 5000)
  }, [handleError])

  return(
    <div className={classes.errrorBar}>
      <button className={classes.errorBtn} onClick={onCloseClickHandler}></button>
      { errorMessage }
    </div>
  )
}