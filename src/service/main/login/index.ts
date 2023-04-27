import ybRequest from '@/service'
import { GetDepartmentListParams } from './types'

enum DepartmentAPI {
  DepartmentList = '/department/list',
}

export function getDepartmentList(params: GetDepartmentListParams) {
  return ybRequest.post({
    url: DepartmentAPI.DepartmentList,
    data: params,
  })
}
