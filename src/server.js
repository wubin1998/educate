const domain = ''

export const getData = () => fetch(`${domain}/data`)
export const getLog = () => fetch(`${domain}/log`)

export const taskDone = (id) => fetch(`${domain}/task/done?id=${id}`)
export const taskDelete = (id) => fetch(`${domain}/task/delete?id=${id}`)

export const getReward = (reward) => fetch(`${domain}/reward?star=${reward.price}&diamond=${reward.diamond}&name=${reward.name}`)

export const taskNew = (body) => fetch(`${domain}/task/new`, {
  method: 'post',
  body,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const taskSave = (body) => fetch(`${domain}/task/save`, {
  method: 'post',
  body,
  headers: {
    'Content-Type': 'application/json'
  }
})


export const taskSaveDelete = (id) => fetch(`${domain}/task/save/delete?id=${id}`)

export const saveSetting = (body) => fetch(`${domain}/save/setting`, {
  method: 'post',
  body,
  headers: {
    'Content-Type': 'application/json'
  }
})