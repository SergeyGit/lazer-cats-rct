import { PrismicRichText } from '@prismicio/react';
import React, { Fragment, useState } from 'react';
import style from '@/styles/modules/partnersForm.module.scss';
import cn from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';
import { PrismicNextImage } from '@prismicio/next';
import Image from 'next/image';
import Light from '../../assets/images/partners/lightin.png';
import { getField } from '@/components/Form/FormFields';

/**
 * @typedef {import("@prismicio/client").Content.PartnerFormSlice} PartnerFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnerFormSlice>} PartnerFormProps
 * @param { PartnerFormProps }
 */
const initData = {
  name: '',
  email: '',
  topic: 'topic1',
};
const PartnerForm = ({ slice }) => {
  const [formData, setFormData] = useState(initData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const formFields = slice.primary.fields_names.split(', ')?.map((item) => ({
    label: item.replace(/^.*\[/g, '').replace(/].*/g, ''),
    id: item.split(' [')[0] || '',
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // setStatusError(phone.length < 4);
    // if (!statusError && phone.length > 4) {
    //   setLoading(true)
    //   fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       receiveEmail,
    //       ...formData,
    //       phone,
    //       turnover: category
    //     })
    //   }).then((res) => {
    //     setLoading(false)
    //     if (res.status === 200) {
    //       setFormData(initData);
    //       setPhone('');
    //       setSuccess(true);
    //     }
    //   }).catch(error => {
    //     setLoading(false);
    //     console.log(error)
    //   })
    // }
  };

  return (
    <section className={style.section}>
      <div className={cn(style.partnerBG, 'd-flex flex-wrap')}>
        {[...Array(15)].map((_, index) => (
          <Fragment key={index}>
            {slice.items?.map(({ icon_partner, icon_partner_hover }) => (
              <div
                key={icon_partner.url}
                className={cn(
                  style.partnerBGItem,
                  'd-flex align-items-center justify-content-center'
                )}
              >
                <PrismicNextImage field={icon_partner} fill={false} loading="lazy" alt="social" />
                <div
                  className={cn(
                    style.partnerBGItemHover,
                    'd-flex align-items-center justify-content-center'
                  )}
                >
                  <PrismicNextImage
                    field={icon_partner_hover}
                    fill={false}
                    loading="lazy"
                    alt="social"
                  />
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div className={style.bg}>
        <PrismicNextImage field={slice.primary.background} fill loading="lazy" alt="bg" />
      </div>
      <Container className={style.container}>
        <div className="multicolor-title h1 text-center">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <Row className={cn('align-items-center', style.content)}>
          <Col lg={6}>
            <div className={style.description}>
              <PrismicRichText field={slice.primary.description} />
              <Image src={Light} alt="light" loading="lazy" className={style.light} height={69} />
            </div>
          </Col>
          <Col lg={6} className="djustify-content-end">
            <form onSubmit={handleSubmit}>
              {formFields?.map(({ label, id }) => (
                <div className={style.formItem} key={id}>
                  <label htmlFor={id}>{label}</label>
                  {getField({ name: id, value: formData[id] || '', handleChange })}
                </div>
              ))}
              <div className={cn(style.formButton, 'link')}>
                <button>{slice.primary.submit_text}</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnerForm;
