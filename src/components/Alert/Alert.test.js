/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { mount } from 'enzyme'

import Alert from './Alert'

it('renders correctly', () => {
  const props = {
    type: 'info',
    title: 'title',
    message: 'message',
  }

  const wrapper = mount(<Alert {...props} />)
  expect(wrapper).toIncludeText(props.title)
  expect(wrapper).toIncludeText(props.message)
  expect(wrapper.find('.qicon-question')).toHaveLength(1)
})

it('hidden icon', () => {
  const props = {
    type: 'info',
    message: 'message',
  }

  const wrapper = mount(<Alert {...props} />)
  expect(wrapper.find('.qicon')).toHaveLength(0)
})
