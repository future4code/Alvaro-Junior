export type task = {
  id: string,
  title: string,
  description: string,
  limitDate: Date,
  status: status,
  creatorUserId: string
}

export enum status {
  to_do = "to-do",
  doing = "doing",
  done = "done",
}