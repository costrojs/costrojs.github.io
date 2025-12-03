/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link'
import codeSandboxImage from '@site/static/img/costro-codesandbox.jpg'

export function PlaygroundCardsRow() {
	return (
		<div className="row">
			<div className="col col--6 margin-bottom--lg">
				<div className="card">
					<div className="card__image">
						<Link to="https://codesandbox.io/s/costro-x8j4f">
							<img src={codeSandboxImage} alt="CodeSandbox's website" />
						</Link>
					</div>
					<div className="card__body">
						<h3>📦 CodeSandbox</h3>
						<p>
							CodeSandbox is an online code playground. Runs Costro in a remote Docker container.
						</p>
					</div>
					<div className="card__footer">
						<div className="button-group button-group--block">
							<Link className="button button--secondary" to="https://codesandbox.io/s/costro-x8j4f">
								Try it now!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
