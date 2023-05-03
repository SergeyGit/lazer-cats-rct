import { PrismicRichText } from '@prismicio/react';
import React, { Fragment, useState } from 'react';
import style from '@/styles/modules/partnersForm.module.scss';
import cn from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';
import { PrismicNextImage } from '@prismicio/next';
import Image from 'next/image';
import Light from '../../assets/images/partners/lightin.png';
import { getField } from '@/components/Form/FormFields';
import SuccessIcon from '../../assets/images/success.svg';

/**
 * @typedef {import("@prismicio/client").Content.PartnerFormSlice} PartnerFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnerFormSlice>} PartnerFormProps
 * @param { PartnerFormProps }
 */
const initData = {
  name: '',
  email: '',
  topic: 'topic1',
  message: '',
};
const PartnerForm = ({ slice }) => {
  const [formData, setFormData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const isMainPage = !!slice.items.length;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleBack = () => {
    setSuccess(false);
  };

  const formFields = slice.primary.fields_names.split(', ')?.map((item) => ({
    label: item.replace(/^.*\[/g, '').replace(/].*/g, ''),
    id: item.split(' [')[0] || '',
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        receiveEmail: slice.primary.receiveemail,
      }),
    })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          setFormData(initData);
          setSuccess(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <section
      className={cn(style.section, {
        [style.contact]: !isMainPage,
      })}
    >
      {isMainPage && (
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
      )}

      <div
        className={cn(style.bg, {
          [style.contact]: !isMainPage,
        })}
      >
        <PrismicNextImage field={slice.primary.background} fill loading="lazy" alt="bg" />
      </div>
      <Container
        className={cn(style.container, {
          [style.contact]: !isMainPage,
        })}
      >
        <div className="multicolor-title h1 text-center">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <Row
          className={cn('align-items-center', style.content, {
            [style.contact]: !isMainPage,
          })}
        >
          <Col lg={isMainPage ? 6 : 12}>
            <div
              className={cn(style.description, {
                [style.contact]: !isMainPage,
              })}
            >
              <PrismicRichText field={slice.primary.description} />
              {isMainPage && (
                <Image src={Light} alt="light" loading="lazy" className={style.light} height={69} />
              )}
            </div>
          </Col>
          <Col lg={isMainPage ? 6 : 12} className="djustify-content-end">
            {success ? (
              <div
                className={cn(
                  style.success,
                  'd-flex flex-column align-items-center justify-content-center'
                )}
              >
                <div className={style.successIcon}>
                  <Image src={SuccessIcon} alt="success" loading="lazy" />
                </div>
                <PrismicRichText field={slice.primary.thnq_text} />
                <div className={cn(style.successButton, 'link')}>
                  <button onClick={handleBack}>{slice.primary.back_text}</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {formFields?.map(({ label, id }) => (
                  <div className={style.formItem} key={id}>
                    <label htmlFor={id}>{label}</label>
                    {getField({ name: id, value: formData[id] || '', handleChange })}
                  </div>
                ))}
                <div className={cn(style.formButton, 'link')}>
                  <button disabled={loading}>{slice.primary.submit_text}</button>
                </div>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnerForm;
