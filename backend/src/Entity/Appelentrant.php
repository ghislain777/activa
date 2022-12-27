<?php

namespace App\Entity;

use App\Repository\AppelentrantRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use DateTime;

/**
 * * @ApiResource(
   *   normalizationContext={"groups"={"lecture"}},
   *     denormalizationContext={"groups"={"ecriture"}},
   *     attributes={
   *         "pagination_client_items_per_page"=true,
   *         "order"={"id": "desc"}
   *     }
   * )
   * @ApiFilter(SearchFilter::class, properties={"id": "exact", "nom": "partial", "description": "partial"})
 * @ORM\Entity(repositoryClass=AppelentrantRepository::class)
 */
class Appelentrant
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer" , options={"comment":"ID"})
     * @Groups({"lecture"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime" , options={"comment":"Date appel"})
     * @Groups({"lecture", "ecriture"})
     */
    private $dateappel;

    /**
     * @ORM\ManyToOne(targetEntity=Contact::class, inversedBy="appelentrants")
     *  @ORM\JoinColumn(nullable=false, name="contact")
     * @Groups({"lecture", "ecriture"})
     */
    private $contact;

    /**
     * @ORM\ManyToOne(targetEntity=Conseillerclient::class, inversedBy="appelentrants")
     *  @ORM\JoinColumn(nullable=true, name="conseillerclient")
     * @Groups({"lecture", "ecriture"})
     */
    private $conseillerclient;

    /**
     * @ORM\ManyToOne(targetEntity=Filedattente::class, inversedBy="appelentrants")
     *  @ORM\JoinColumn(nullable=true, name="filedattente")
     * @Groups({"lecture", "ecriture"})
     */
    private $filedattente;

    /**
     * @ORM\ManyToOne(targetEntity=Branche::class, inversedBy="appelentrants")
     *  @ORM\JoinColumn(nullable=true, name="branche")
     * @Groups({"lecture", "ecriture"})
     */
    private $branche;

    /**
     * @ORM\ManyToOne(targetEntity=Categoriecontact::class, inversedBy="appelentrants")
     *  @ORM\JoinColumn(nullable=true, name="categoriecontact")
     * @Groups({"lecture", "ecriture"})
     */
    private $categoriecontact;

    /**
     * @ORM\ManyToOne(targetEntity=Motifappel::class, inversedBy="appelentrants")
     * @Groups({"lecture", "ecriture"})
     *  @ORM\JoinColumn(nullable=true, name="motifappel")
     */
    private $motifappel;

    /**
     * @ORM\ManyToOne(targetEntity=Statutticket::class, inversedBy="appelentrants")
     *  @ORM\JoinColumn(nullable=true, name="statutticket")
     * @Groups({"lecture", "ecriture"})
     */
    private $statutticket;


    public function __construct()
    {
        $this->dateappel = new \DateTime();
        
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateappel(): ?\DateTimeInterface
    {
        return $this->dateappel;
    }

    public function setDateappel(\DateTimeInterface $dateappel): self
    {
        $this->dateappel = $dateappel;

        return $this;
    }

    public function getContact(): ?Contact
    {
        return $this->contact;
    }

    public function setContact(?Contact $contact): self
    {
        $this->contact = $contact;

        return $this;
    }

    public function getConseillerclient(): ?Conseillerclient
    {
        return $this->conseillerclient;
    }

    public function setConseillerclient(?Conseillerclient $conseillerclient): self
    {
        $this->conseillerclient = $conseillerclient;

        return $this;
    }

    public function getFiledattente(): ?Filedattente
    {
        return $this->filedattente;
    }

    public function setFiledattente(?Filedattente $filedattente): self
    {
        $this->filedattente = $filedattente;

        return $this;
    }

    public function getBranche(): ?Branche
    {
        return $this->branche;
    }

    public function setBranche(?Branche $branche): self
    {
        $this->branche = $branche;

        return $this;
    }

    public function getCategoriecontact(): ?Categoriecontact
    {
        return $this->categoriecontact;
    }

    public function setCategoriecontact(?Categoriecontact $categoriecontact): self
    {
        $this->categoriecontact = $categoriecontact;

        return $this;
    }

    public function getMotifappel(): ?Motifappel
    {
        return $this->motifappel;
    }

    public function setMotifappel(?Motifappel $motifappel): self
    {
        $this->motifappel = $motifappel;

        return $this;
    }

    public function getStatutticket(): ?Statutticket
    {
        return $this->statutticket;
    }

    public function setStatutticket(?Statutticket $statutticket): self
    {
        $this->statutticket = $statutticket;

        return $this;
    }
}
