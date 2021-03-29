import { MicroApp } from 'umi'

function list(props) {
  return (
    <div>
      I am user list, I am in master project
      <MicroApp name='list' base="/home/list"></MicroApp>
    </div>
  )
}

export default list

