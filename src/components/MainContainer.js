import React from 'react'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// }))

export const MainContainer = ({ children, ...props }) => {
  // const styles = useStyles()

  return (
    <div
      // className={styles.root}
      component='main'
      maxWidth='xs'
      {...props}
    >
      {children}
    </div>
  )
}