import React from 'react';
import { footerLinkContent } from '../../../../../contents';
import For from '../../global/for';

const FooterSection = () => {
	return (
		<div className="font-semibold">
			<div className="">
				<div className="">
					<For each={footerLinkContent}>
						{(item, index) => (
							<div key={index}>
								<div className="">
									<p>{item?.header?.text}</p>
								</div>
								<div>
									<For each={item?.children}>
										{(child, index) => (
											<div>
												<div></div>
											</div>
										)}
									</For>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default FooterSection;
