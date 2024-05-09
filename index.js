const Notification = props => {
  const {className, image, Text, url} = props
  return (
    <div className={className}>
      <div className={className}>
        <img src={url} className={image} />
        <p className={className}>{Text}</p>
      </div>
    </div>
  )
}

const element = (
  <div className='container'>
    <div className='inside'>
      <h1>Notifications</h1>
      <div className='information-container'>
        <Notification
          className='information'
          image='icon'
          Text='Information Message'
          url='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        />
      </div>
      <Notification
        className='sucess'
        image='icon'
        Text='Sucess Message'
        url='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='warning'
        image='icon'
        Text='Warning Message'
        url='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='Error'
        image='icon'
        Text='Error Message'
        url='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
